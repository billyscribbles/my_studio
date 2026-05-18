#!/usr/bin/env python3
"""
Generate print-ready, fully-vector business cards for Onrai Studio.

Outputs (public/images/brand/print/):
  - business-card-front.{svg,pdf}
  - business-card-back-billy.{svg,pdf}
  - business-card-back-andrew.{svg,pdf}
  - business-card-billy.pdf   (2 pages: front + back)
  - business-card-andrew.pdf  (2 pages: front + back)

Every glyph is converted to outline paths via fontTools, so the files carry
no font dependency and never pixelate at any size. Card is 90x55mm (AU
standard) with 3mm bleed and crop marks.
"""

import os
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.recordingPen import RecordingPen
from fontTools.pens.qu2cuPen import Qu2CuPen

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONT_DIR = os.path.join(ROOT, "public", "fonts")
OUT_DIR = os.path.join(ROOT, "public", "images", "brand", "print")

# ---------------------------------------------------------------- geometry
TRIM_W, TRIM_H = 90.0, 55.0     # AU standard business card (mm)
BLEED = 3.0                      # mm of artwork beyond the trim
MARGIN = 4.0                     # mm quiet zone for crop marks
OFF = BLEED + MARGIN             # trim corner offset inside the canvas
CANVAS_W = TRIM_W + 2 * OFF      # 104mm
CANVAS_H = TRIM_H + 2 * OFF      # 69mm
PT = 72.0 / 25.4                 # points per mm

# ---------------------------------------------------------------- fonts
class Face:
    """A static instance of a variable font with glyph-outline extraction."""

    def __init__(self, path, axes):
        font = instantiateVariableFont(TTFont(path), axes, inplace=False)
        self.upm = font["head"].unitsPerEm
        self.glyphs = font.getGlyphSet()
        self.cmap = font.getBestCmap()
        self._cache = {}
        self.cap = self._bbox("H")[3] / self.upm          # cap height / em
        self.asc = self._bbox("d")[3] / self.upm          # ascender / em
        self.desc = -self._bbox("g")[1] / self.upm        # descender / em

    def _record(self, ch):
        if ch in self._cache:
            return self._cache[ch]
        name = self.cmap.get(ord(ch))
        if name is None:
            raise SystemExit(f"missing glyph for {ch!r}")
        glyph = self.glyphs[name]
        rec = RecordingPen()
        glyph.draw(Qu2CuPen(rec, 0.6, all_cubic=True))
        self._cache[ch] = (rec.value, glyph.width)
        return self._cache[ch]

    def _bbox(self, ch):
        rec, _ = self._record(ch)
        xs, ys = [], []
        for op, pts in rec:
            for p in pts:
                xs.append(p[0]); ys.append(p[1])
        return min(xs), min(ys), max(xs), max(ys)

    def advance(self, ch):
        return self._record(ch)[1] / self.upm             # advance / em

    def glyph(self, ch, pen_x, baseline_y, em):
        """Return list of subpaths (mm, y-down) for one glyph."""
        rec, _ = self._record(ch)
        s = em / self.upm
        out, sub = [], None

        def T(p):
            return (pen_x + p[0] * s, baseline_y - p[1] * s)

        for op, pts in rec:
            if op == "moveTo":
                sub = [("M", *T(pts[0]))]
            elif op == "lineTo":
                sub.append(("L", *T(pts[0])))
            elif op == "curveTo":
                sub.append(("C", *T(pts[0]), *T(pts[1]), *T(pts[2])))
            elif op in ("closePath", "endPath"):
                sub.append(("Z",))
                out.append(sub)
                sub = None
            else:
                raise SystemExit(f"unexpected pen op {op}")
        if sub:
            sub.append(("Z",))
            out.append(sub)
        return out


def text(face, string, x, baseline, em, tracking=0.0, align="left",
         target_w=None):
    """Lay a string as outline subpaths. Returns (subpaths, width)."""
    advs = [face.advance(c) * em for c in string]
    natural = sum(advs)
    n = len(string)
    if target_w is not None and n > 1:
        tracking = (target_w - natural) / (n - 1)
    width = natural + tracking * max(n - 1, 0)
    if align == "right":
        x -= width
    elif align == "center":
        x -= width / 2
    paths, pen = [], x
    for c, adv in zip(string, advs):
        paths += face.glyph(c, pen, baseline, em)
        pen += adv + tracking
    return paths, width


# ---------------------------------------------------------------- shapes
def rect(x, y, w, h):
    return [[("M", x, y), ("L", x + w, y), ("L", x + w, y + h),
             ("L", x, y + h), ("Z",)]]


def circle(cx, cy, r):
    k = 0.5522847498 * r
    return [[
        ("M", cx, cy - r),
        ("C", cx + k, cy - r, cx + r, cy - k, cx + r, cy),
        ("C", cx + r, cy + k, cx + k, cy + r, cx, cy + r),
        ("C", cx - k, cy + r, cx - r, cy + k, cx - r, cy),
        ("C", cx - r, cy - k, cx - k, cy - r, cx, cy - r),
        ("Z",),
    ]]


def crop_marks():
    """Eight hairline strokes marking the trim box, sitting in the margin."""
    t = 0.18                      # hairline thickness
    arm = 4.0                     # mark length
    gap = BLEED                   # clear of the artwork
    shapes = []
    for cx in (OFF, OFF + TRIM_W):
        for cy in (OFF, OFF + TRIM_H):
            hx = cx - gap - arm if cx < CANVAS_W / 2 else cx + gap
            shapes += rect(hx, cy - t / 2, arm, t)
            vy = cy - gap - arm if cy < CANVAS_H / 2 else cy + gap
            shapes += rect(cx - t / 2, vy, t, arm)
    return shapes


# ---------------------------------------------------------------- emit SVG
def fmt(v):
    return f"{v:.4f}".rstrip("0").rstrip(".")


def to_svg_d(subpaths):
    out = []
    for sub in subpaths:
        for cmd in sub:
            out.append(cmd[0] + " " + " ".join(fmt(n) for n in cmd[1:]))
    return " ".join(out).replace("Z ", "Z ").strip()


def write_svg(path, drawables):
    parts = [
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'width="{fmt(CANVAS_W)}mm" height="{fmt(CANVAS_H)}mm" '
        f'viewBox="0 0 {fmt(CANVAS_W)} {fmt(CANVAS_H)}">'
    ]
    for subpaths, color in drawables:
        parts.append(f'<path d="{to_svg_d(subpaths)}" fill="{color}"/>')
    parts.append("</svg>\n")
    with open(path, "w") as fh:
        fh.write("\n".join(parts))


# ---------------------------------------------------------------- emit PDF
def hex_rgb(color):
    c = color.lstrip("#")
    return tuple(int(c[i:i + 2], 16) / 255 for i in (0, 2, 4))


def to_pdf_ops(subpaths):
    def X(v):
        return v * PT

    def Y(v):
        return (CANVAS_H - v) * PT

    out = []
    for sub in subpaths:
        for cmd in sub:
            k = cmd[0]
            if k == "M":
                out.append(f"{X(cmd[1]):.3f} {Y(cmd[2]):.3f} m")
            elif k == "L":
                out.append(f"{X(cmd[1]):.3f} {Y(cmd[2]):.3f} l")
            elif k == "C":
                out.append(
                    f"{X(cmd[1]):.3f} {Y(cmd[2]):.3f} "
                    f"{X(cmd[3]):.3f} {Y(cmd[4]):.3f} "
                    f"{X(cmd[5]):.3f} {Y(cmd[6]):.3f} c")
            elif k == "Z":
                out.append("h")
    return out


def write_pdf(path, pages):
    """pages: list of drawables-lists. All pages share the canvas size."""
    objs = []      # object bodies (bytes), 1-indexed via append order

    def add(body):
        objs.append(body)
        return len(objs)

    kids_id = 2    # Pages object reserved as id 2
    add(b"")       # 1 catalog placeholder
    add(b"")       # 2 pages placeholder
    page_ids = []
    for drawables in pages:
        stream = []
        for subpaths, color in drawables:
            r, g, b = hex_rgb(color)
            stream.append(f"{r:.4f} {g:.4f} {b:.4f} rg")
            stream += to_pdf_ops(subpaths)
            stream.append("f")
        data = "\n".join(stream).encode()
        content_id = add(
            b"<< /Length %d >>\nstream\n" % len(data) + data
            + b"\nendstream")
        trim = (OFF * PT, OFF * PT,
                (OFF + TRIM_W) * PT, (OFF + TRIM_H) * PT)
        bleed = ((OFF - BLEED) * PT, (OFF - BLEED) * PT,
                 (OFF + TRIM_W + BLEED) * PT, (OFF + TRIM_H + BLEED) * PT)
        page_id = add(
            b"<< /Type /Page /Parent %d 0 R "
            b"/MediaBox [0 0 %.3f %.3f] "
            b"/TrimBox [%.3f %.3f %.3f %.3f] "
            b"/BleedBox [%.3f %.3f %.3f %.3f] "
            b"/Contents %d 0 R /Resources << >> >>"
            % (kids_id, CANVAS_W * PT, CANVAS_H * PT,
               trim[0], trim[1], trim[2], trim[3],
               bleed[0], bleed[1], bleed[2], bleed[3], content_id))
        page_ids.append(page_id)

    objs[0] = b"<< /Type /Catalog /Pages %d 0 R >>" % kids_id
    kids = " ".join(f"{pid} 0 R" for pid in page_ids)
    objs[1] = (b"<< /Type /Pages /Count %d /Kids [%s] >>"
               % (len(page_ids), kids.encode()))

    buf = b"%PDF-1.4\n%\xe2\xe3\xcf\xd3\n"
    offsets = []
    for i, body in enumerate(objs, 1):
        offsets.append(len(buf))
        buf += b"%d 0 obj\n" % i + body + b"\nendobj\n"
    xref = len(buf)
    buf += b"xref\n0 %d\n" % (len(objs) + 1)
    buf += b"0000000000 65535 f \n"
    for off in offsets:
        buf += b"%010d 00000 n \n" % off
    buf += (b"trailer\n<< /Size %d /Root 1 0 R >>\nstartxref\n%d\n%%%%EOF"
            % (len(objs) + 1, xref))
    with open(path, "wb") as fh:
        fh.write(buf)


# ---------------------------------------------------------------- palette
INK        = "#18181b"
INK_SOFT   = "#27272a"
MUTED      = "#71717a"
ACCENT     = "#0c8c81"
DIV_LIGHT  = "#cfcdc8"
WHITE      = "#ffffff"
PAPER      = "#ffffff"
MARK       = "#111113"
TEAL_DIV   = "#55aea8"
TEAL_LABEL = "#79c0ba"
TEAL_ROLE  = "#b1dad7"

# fonts (instanced once)
FR_TITLE = Face(os.path.join(FONT_DIR, "fraunces-latin.woff2"),
                {"wght": 690, "opsz": 72})
FR_NAME  = Face(os.path.join(FONT_DIR, "fraunces-latin.woff2"),
                {"wght": 560, "opsz": 40})
JK_MED   = Face(os.path.join(FONT_DIR, "plus-jakarta-sans-latin.woff2"),
                {"wght": 500})
JK_SEMI  = Face(os.path.join(FONT_DIR, "plus-jakarta-sans-latin.woff2"),
                {"wght": 600})
JK_VAL   = Face(os.path.join(FONT_DIR, "plus-jakarta-sans-latin.woff2"),
                {"wght": 470})
JK_ROLE  = Face(os.path.join(FONT_DIR, "plus-jakarta-sans-latin.woff2"),
                {"wght": 360})


def em_for_cap(face, cap_mm):
    return cap_mm / face.cap


def at(x, y):
    """Translate trim-relative coords to canvas coords."""
    return x + OFF, y + OFF


# ---------------------------------------------------------------- front
def front():
    d = []
    d.append((rect(0, 0, CANVAS_W, CANVAS_H), PAPER))

    # title -------------------------------------------------------------
    tx, tbase = at(11.05, 28.85)
    em = em_for_cap(FR_TITLE, 2.72)
    paths, w = text(FR_TITLE, "ONRAI STUDIO", tx, tbase, em,
                    target_w=28.75)
    d.append((paths, INK))

    # accent dot --------------------------------------------------------
    d.append((circle(tx + w + 1.7, tbase - 2.72 / 2, 0.56), ACCENT))

    # divider -----------------------------------------------------------
    dx, dy = at(46.17, 16.10)
    d.append((rect(dx - 0.11, dy, 0.22, 22.80), DIV_LIGHT))

    # right block -------------------------------------------------------
    rx, _ = at(50.33, 0)
    em_t = em_for_cap(JK_MED, 1.62)
    d.append((text(JK_MED, "AI-accelerated web builds",
                   rx, at(0, 24.83)[1], em_t)[0], INK_SOFT))
    d.append((text(JK_MED, "onraistudio.com",
                   rx, at(0, 28.83)[1], em_t)[0], ACCENT))
    d.append((text(JK_SEMI, "MELBOURNE, AUSTRALIA",
                   rx, at(0, 32.08)[1], em_for_cap(JK_SEMI, 1.00),
                   target_w=20.83)[0], MUTED))

    d.append((crop_marks(), MARK))
    return d


# ---------------------------------------------------------------- back
def back(name, role_lines, fields):
    d = []
    d.append((rect(0, 0, CANVAS_W, CANVAS_H), PAPER))
    d.append((rect(BLEED, BLEED, TRIM_W + 2 * MARGIN, TRIM_H + 2 * MARGIN),
              ACCENT))

    # divider -----------------------------------------------------------
    dx, dy = at(44.50, 15.05)
    d.append((rect(dx - 0.11, dy, 0.22, 24.90), TEAL_DIV))

    # name + role (vertically centred as a block) -----------------------
    name_cap, role_cap = 3.05, 1.50
    role_lh = 2.85
    em_name = em_for_cap(FR_NAME, name_cap)
    em_role = em_for_cap(JK_ROLE, role_cap)
    n_role = len(role_lines)
    top = -name_cap
    bottom = 4.40 + role_lh * (n_role - 1) + JK_ROLE.desc * em_role
    name_base = 27.50 - (top + bottom) / 2

    nx, nbase = at(13.00, name_base)
    npaths, nw = text(FR_NAME, name, nx, nbase, em_name)
    d.append((npaths, WHITE))

    name_right = nx + nw
    for i, line in enumerate(role_lines):
        rb = nbase + 4.40 + i * role_lh
        d.append((text(JK_ROLE, line, name_right, rb, em_role,
                       align="right")[0], TEAL_ROLE))

    # contact fields ----------------------------------------------------
    fx, _ = at(50.60, 0)
    em_label = em_for_cap(JK_SEMI, 1.02)
    em_value = em_for_cap(JK_VAL, 1.95)
    for i, (label, value) in enumerate(fields):
        lb = at(0, 13.97 + i * 8.08)[1]
        d.append((text(JK_SEMI, label, fx, lb, em_label,
                       tracking=0.42)[0], TEAL_LABEL))
        d.append((text(JK_VAL, value, fx, lb + 3.66, em_value)[0], WHITE))

    d.append((crop_marks(), MARK))
    return d


# ---------------------------------------------------------------- build
def main():
    os.makedirs(OUT_DIR, exist_ok=True)

    cards = {
        "business-card-front": front(),
        "business-card-back-billy": back(
            "Billy Huynh", ["Developer & Designer"],
            [("PHONE", "0435 574 033"),
             ("EMAIL", "onraistudio@gmail.com"),
             ("WEB", "onraistudio.com"),
             ("INSTAGRAM", "@onraistudio")]),
        "business-card-back-andrew": back(
            "Andrew Peng", ["Business Development", "Manager"],
            [("PHONE", "0423 303 500"),
             ("EMAIL", "onraistudio@gmail.com"),
             ("WEB", "onraistudio.com"),
             ("INSTAGRAM", "@onraistudio")]),
    }

    for stem, drawables in cards.items():
        write_svg(os.path.join(OUT_DIR, stem + ".svg"), drawables)
        write_pdf(os.path.join(OUT_DIR, stem + ".pdf"), [drawables])
        print("wrote", stem + ".svg /.pdf")

    for who in ("billy", "andrew"):
        write_pdf(os.path.join(OUT_DIR, f"business-card-{who}.pdf"),
                  [cards["business-card-front"],
                   cards[f"business-card-back-{who}"]])
        print(f"wrote business-card-{who}.pdf (2 pages)")


if __name__ == "__main__":
    main()
