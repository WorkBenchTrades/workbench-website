import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — WorkBench',
  description: 'The terms that govern your use of the WorkBench construction management app.',
};

const SUPPORT_EMAIL = 'toolbeltsoftware@gmail.com';

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: '1. Acceptance of these terms',
    body: 'By creating a WorkBench account or using the app, you agree to these terms. If you\'re signing up on behalf of a business, you\'re confirming you have the authority to bind that business to this agreement.',
  },
  {
    heading: '2. What WorkBench is',
    body: 'WorkBench is a business management app for UK trades businesses — job tracking, scheduling, quoting, invoicing, and related tools. The business that signs up (the "Owner") controls their account and can invite team members ("Staff") and clients ("Client") with narrower access to just what\'s relevant to them.',
  },
  {
    heading: '3. Accounts & eligibility',
    body: 'You must be 18 or over to create an account. You\'re responsible for keeping your login credentials secure and for all activity that happens under your account. Tell us straight away if you suspect unauthorised access.',
  },
  {
    heading: '4. Subscriptions & billing',
    body: 'WorkBench is offered on paid subscription plans, billed monthly in advance unless stated otherwise. Prices are shown in the app at the point of purchase. You can cancel at any time from Settings; cancelling stops future billing but doesn\'t refund the current billing period unless required by law. We may change prices with advance notice — continuing to use WorkBench after a price change takes effect means you accept the new price.',
  },
  {
    heading: '5. Acceptable use',
    body: 'Use WorkBench only for lawful business purposes. Don\'t: attempt to break or bypass security, resell or white-label the app without our written agreement, upload content you don\'t have the rights to, or use the app to harass, defraud, or mislead anyone (including your own clients or staff).',
  },
  {
    heading: '6. Your content & data',
    body: 'You keep ownership of the business data you put into WorkBench — jobs, quotes, invoices, photos, messages, and everything else you or your team enter. We only use it to provide the service, as described in our Privacy Policy. You\'re responsible for the accuracy of the data you enter, including anything used for invoicing, tax (MTD) submissions, or shared with clients or subcontractors.',
  },
  {
    heading: '7. Third-party services',
    body: 'Some features work by connecting a third-party account you choose to link — Google (Gmail/Calendar/Tasks), Xero, QuickBooks, TrueLayer, Stripe, WhatsApp Business, and similar. Those services have their own terms and privacy policies, and your use of them through WorkBench is also subject to those. We\'re not responsible for outages or changes on their end.',
  },
  {
    heading: '8. Disclaimers',
    body: 'WorkBench is provided "as is." While we work hard to keep it accurate and reliable, we don\'t guarantee it will be error-free, uninterrupted, or fit for every specific business need — and we don\'t provide accounting, tax, or legal advice. Figures WorkBench calculates (profit, VAT, MTD summaries, etc.) are tools to help you, not a substitute for checking with your accountant.',
  },
  {
    heading: '9. Limitation of liability',
    body: 'To the extent permitted by law, WorkBench isn\'t liable for indirect or consequential losses (like lost profits or lost data) arising from your use of the app. Nothing in these terms limits liability where the law doesn\'t allow it to be limited, such as for death, personal injury caused by negligence, or fraud.',
  },
  {
    heading: '10. Termination',
    body: 'You can stop using WorkBench and delete your account at any time via the "Request Account Deletion" option in the app. We may suspend or terminate an account that breaches these terms, with notice where reasonably possible.',
  },
  {
    heading: '11. Changes to these terms',
    body: 'We\'ll update these terms as the app changes and note the date at the top. Continuing to use WorkBench after an update means you accept the revised terms.',
  },
  {
    heading: '12. Governing law',
    body: 'These terms are governed by the laws of England and Wales, and any disputes will be handled by the courts of England and Wales.',
  },
  {
    heading: '13. Contact',
    body: SUPPORT_EMAIL,
  },
];

export default function TermsPage() {
  return (
    <main style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", backgroundColor: '#f5f2ed', color: '#1a1a18', margin: 0, padding: 0, minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 48px', borderBottom: '1px solid #ddd9d3', position: 'sticky', top: 0, backgroundColor: '#f5f2edee', backdropFilter: 'blur(16px)', zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          <span style={{ fontSize: 18, fontWeight: 800, color: '#1a1a18', letterSpacing: -0.5 }}>WorkBench</span>
        </a>
        <a href="/" style={{ color: '#666', textDecoration: 'none', fontSize: 14, fontWeight: 500 }}>← Back to home</a>
      </nav>

      {/* CONTENT */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '64px 48px 96px' }}>
        <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#999', letterSpacing: 1 }}>LEGAL</span>
        <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: -1.5, lineHeight: 1.05, margin: '12px 0 8px', color: '#1a1a18' }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: 14, color: '#999', margin: '0 0 40px' }}>Last updated: 12 September 2026</p>

        <p style={{ fontSize: 15, color: '#666', lineHeight: 1.8, margin: '0 0 40px', padding: '16px 20px', backgroundColor: '#f0ede8', borderRadius: 10, border: '1px solid #ddd9d3' }}>
          This is a first draft, generated to match what WorkBench actually does today. It will be reviewed by a solicitor before we rely on it as a final policy — published now so you can see exactly what you're agreeing to while WorkBench is in beta.
        </p>

        {SECTIONS.map(section => (
          <div key={section.heading} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.3, margin: '0 0 12px', color: '#1a1a18' }}>{section.heading}</h2>
            {section.body.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: 15, color: '#555', lineHeight: 1.8, margin: '0 0 12px', whiteSpace: 'pre-line' }}>{para}</p>
            ))}
          </div>
        ))}
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #ddd9d3', padding: '36px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <span style={{ fontSize: 15, fontWeight: 800, color: '#1a1a18' }}>WorkBench</span>
            <span style={{ color: '#ddd9d3' }}>|</span>
            <span style={{ color: '#aaa', fontSize: 13 }}>Built for UK tradespeople · Launching 2026</span>
          </div>
          <div style={{ display: 'flex', gap: 28 }}>
            <a href="/" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Home</a>
            <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Privacy Policy</a>
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Contact</a>
          </div>
          <span style={{ color: '#ccc', fontSize: 12 }}>© 2026 WorkBench</span>
        </div>
      </footer>
    </main>
  );
}
