import { useEffect } from 'react'
import { X } from 'lucide-react'
import './LegalModal.css'

const PRIVACY = {
  title: 'Privacy Policy',
  updated: '8 April 2025',
  content: [
    {
      heading: '1. Who We Are',
      body: `Onrai Studio ("we", "us", "our") is a web development studio based in Australia. We operate the website at onraistudio.com. Our contact email is onraistudio@gmail.com.`,
    },
    {
      heading: '2. What Information We Collect',
      body: `We collect personal information only when you voluntarily provide it to us. This includes:\n\n• **Contact form submissions** — your name, email address, phone number (optional), business type, and message.\n• **Enquiry and project communications** — emails, calls, or messages you send us directly.\n\nWe do not collect sensitive information (as defined under the Privacy Act 1988 (Cth)) and we do not use cookies for tracking beyond what is described below.`,
    },
    {
      heading: '3. How We Use Your Information',
      body: `We use the information you provide to:\n\n• Respond to your enquiries and provide quotes.\n• Deliver the web development services you engage us for.\n• Send project updates and invoices.\n• Improve our services.\n\nWe will never sell, rent, or share your personal information with third parties for marketing purposes.`,
    },
    {
      heading: '4. Third-Party Services',
      body: `We use the following third-party services that may process your data:\n\n• **Formspree** — processes contact form submissions on our behalf. Your submission data is transmitted to Formspree's servers to deliver your enquiry to us. See Formspree's privacy policy at formspree.io/legal/privacy-policy.\n• **Google Analytics** (if enabled) — collects anonymised usage data to help us understand how visitors use our site. You can opt out via Google's opt-out browser add-on.\n• **Railway / Hosting providers** — our website is hosted on infrastructure that processes standard server logs (IP address, browser type, page accessed, timestamp). Logs are retained for a maximum of 30 days.`,
    },
    {
      heading: '5. Data Storage & Security',
      body: `Your personal information is stored securely and only accessed by Onrai Studio staff involved in your project. We take reasonable steps to protect your data from misuse, loss, unauthorised access, modification, or disclosure. However, no transmission over the internet is completely secure.`,
    },
    {
      heading: '6. Data Retention',
      body: `We retain your information for as long as necessary to provide our services and comply with our legal obligations. Contact form submissions are retained for up to 12 months. Project-related communications are retained for the duration of the engagement and up to 3 years after completion for legal and accounting purposes.`,
    },
    {
      heading: '7. Your Rights',
      body: `Under the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs), you have the right to:\n\n• Access the personal information we hold about you.\n• Request correction of inaccurate information.\n• Request deletion of your information (subject to our legal obligations).\n• Complain about a breach of your privacy.\n\nTo exercise any of these rights, contact us at onraistudio@gmail.com. We will respond within 30 days.`,
    },
    {
      heading: '8. Complaints',
      body: `If you believe we have breached the Australian Privacy Principles, you may contact us at onraistudio@gmail.com. If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au.`,
    },
    {
      heading: '9. Changes to This Policy',
      body: `We may update this Privacy Policy from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continued use of our site after changes constitutes acceptance of the updated policy.`,
    },
  ],
}

const TERMS = {
  title: 'Terms of Service',
  updated: '8 April 2025',
  content: [
    {
      heading: '1. Overview',
      body: `These Terms of Service ("Terms") govern your engagement with Onrai Studio ("we", "us", "our") for web development and related services. By engaging our services or accepting a project proposal, you ("Client") agree to these Terms. These Terms are governed by the laws of Australia.`,
    },
    {
      heading: '2. Services',
      body: `Onrai Studio provides web design, web development, eCommerce setup, AI integrations, SEO, and related digital services as agreed in a project proposal or scope of work document. The specific deliverables, timeline, and price for each project are set out in the proposal accepted by the Client.`,
    },
    {
      heading: '3. Project Proposals & Scope',
      body: `All work is based on a written proposal or scope document. Any changes to the agreed scope ("change requests") must be submitted in writing and may result in additional charges and revised timelines. We will provide a written quote for any change request before proceeding.`,
    },
    {
      heading: '4. Payment Terms',
      body: `Unless otherwise agreed in writing:\n\n• A **50% deposit** is required before work commences.\n• The remaining **50% is due upon project completion**, before the site goes live or files are transferred.\n• For ongoing retainer or maintenance arrangements, invoices are issued monthly in advance.\n• Invoices are due within 14 days of issue.\n• Late payments may incur interest at 10% per annum and may result in suspension of services.\n\nAll prices are in AUD and exclude GST unless stated otherwise.`,
    },
    {
      heading: '5. Client Responsibilities',
      body: `The Client agrees to:\n\n• Provide timely access to required materials (content, images, login credentials, brand assets).\n• Review and provide feedback within the agreed timeframes.\n• Designate a single point of contact for project approvals.\n\nDelays caused by the Client may extend the project timeline and do not affect the Client's payment obligations.`,
    },
    {
      heading: '6. Intellectual Property',
      body: `Upon receipt of full payment, the Client owns the final website code and design assets created specifically for their project. Onrai Studio retains ownership of:\n\n• Pre-existing tools, frameworks, libraries, and reusable code components.\n• Any third-party assets (fonts, stock imagery, plugins) which remain subject to their respective licences.\n\nOnrai Studio reserves the right to display the completed work in its portfolio unless the Client requests otherwise in writing.`,
    },
    {
      heading: '7. Third-Party Services',
      body: `Many projects involve third-party platforms (e.g. Shopify, WordPress, Google, Formspree, Vercel, Railway). The Client is responsible for any subscription, licensing, or usage costs associated with these platforms. Onrai Studio is not liable for changes, outages, or pricing adjustments made by third-party providers.`,
    },
    {
      heading: '8. Warranties & Limitation of Liability',
      body: `We warrant that our work will be performed with reasonable skill and care. We do not warrant that the website will be error-free or that it will achieve specific business outcomes (e.g. Google rankings, conversion rates).\n\nTo the maximum extent permitted by Australian law, Onrai Studio's total liability for any claim arising out of our services is limited to the total amount paid by the Client for the project in question. We are not liable for indirect, incidental, or consequential losses.`,
    },
    {
      heading: '9. Confidentiality',
      body: `Both parties agree to keep confidential any sensitive business information shared during the project and not to disclose it to third parties without prior written consent.`,
    },
    {
      heading: '10. Termination',
      body: `Either party may terminate the engagement with 14 days' written notice. Upon termination:\n\n• The Client pays for all work completed up to the termination date.\n• Onrai Studio will deliver all completed work assets to the Client upon receipt of final payment.\n• The deposit is non-refundable once work has commenced.`,
    },
    {
      heading: '11. Governing Law',
      body: `These Terms are governed by the laws of Australia. Any disputes will be subject to the exclusive jurisdiction of the courts of Australia. We encourage resolving disputes through direct communication before pursuing formal proceedings.`,
    },
    {
      heading: '12. Contact',
      body: `Questions about these Terms? Contact us at onraistudio@gmail.com.`,
    },
  ],
}

export default function LegalModal({ type, onClose }) {
  const doc = type === 'privacy' ? PRIVACY : TERMS

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={doc.title}>
      <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="legal-modal__header">
          <div>
            <h2 className="legal-modal__title">{doc.title}</h2>
            <p className="legal-modal__updated">Last updated: {doc.updated}</p>
          </div>
          <button className="legal-modal__close" onClick={onClose} aria-label="Close">
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        <div className="legal-modal__body">
          {doc.content.map((section) => (
            <div key={section.heading} className="legal-modal__section">
              <h3 className="legal-modal__section-heading">{section.heading}</h3>
              <div className="legal-modal__section-body">
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
