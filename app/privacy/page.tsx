import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — WorkBench',
  description: 'How WorkBench collects, uses, and protects your data, including Gmail, Google Calendar and Google Tasks data for accounts that connect Google.',
};

const SUPPORT_EMAIL = 'hello@workbenchtrades.co.uk';

const SECTIONS: { heading: string; body: string }[] = [
  {
    heading: '1. Who we are',
    body: "WorkBench is a business management app for UK trades businesses. The business that signs up (the \"Owner\") controls their own account; the Owner can invite team members (\"Staff\") and clients (\"Client\") who get narrower access to just what's relevant to them.",
  },
  {
    heading: '2. What we collect',
    body: "Account details: name, email, phone, business details (company name, VAT/CIS/UTR numbers, address).\n\nBusiness data you enter: jobs, quotes, invoices, costs, hours, team members, calendar events, check-ins, photos, documents, contracts.\n\nFinancial data: invoice/payment records, and — only if you choose to connect them — Xero or QuickBooks accounting data and TrueLayer open banking data (account balances and transactions, read-only, only for accounts you explicitly connect).\n\nGoogle Account data, only if you explicitly connect a Google account: Gmail messages (reading, composing, sending, organising your inbox), Google Calendar events, and Google Tasks — see section 4 below for exactly how this is used.\n\nCommunications: emails, WhatsApp messages and SMS you send or receive through the app if you connect those accounts; phone call recordings and transcripts if you use the call-logging feature (see the in-app consent notice shown every time before a call is recorded).\n\nLocation: only while using the app, and only if you grant location permission, to log site check-in locations.\n\nDevice/usage data: standard technical data needed to run the app (device type, crash logs, push notification tokens).",
  },
  {
    heading: '3. How we use it',
    body: 'To provide the service you signed up for: running your jobs, invoicing, scheduling, and the AI assistant features (which send relevant business data to Anthropic’s Claude API to generate drafts, answer questions, and take actions you direct). We do not sell your data.',
  },
  {
    heading: '4. Google user data (Gmail, Calendar, Tasks)',
    body: "If you choose to connect your Google account, WorkBench requests the following Google API scopes and uses them only as described:\n\n• Gmail (read, compose, send, organise your inbox) — so you can view, reply to, and manage work emails from inside WorkBench instead of switching apps.\n• Google Calendar (create and edit events) — so jobs you schedule in WorkBench appear on your Google Calendar and vice versa.\n• Google Tasks (create and edit tasks) — so to-dos created in WorkBench can sync to your Google Tasks list.\n\nIf you use the AI Assistant to draft a reply, summarise, or otherwise act on a specific email, the content of that email is sent to Anthropic’s Claude API to generate the response — this only happens for the message you’re actively working with, when you actively use that feature, never as a background process over your whole inbox.\n\nWorkBench’s use and transfer of information received from Google APIs to any other app will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We do not use Gmail, Calendar, or Tasks data for advertising, we do not sell it, and we do not allow anyone to read it except: (a) with your explicit consent, (b) where needed for security purposes (e.g. investigating abuse), (c) to comply with applicable law, or (d) where the data has been aggregated and anonymised. You can disconnect your Google account at any time from Settings, which revokes WorkBench’s access.",
  },
  {
    heading: '5. Who we share it with',
    body: 'Only the processors needed to run the features you use: Supabase (hosting/database), Anthropic (AI assistant), Twilio (SMS/calls), Meta/WhatsApp Business (WhatsApp messaging), Xero or Intuit QuickBooks (accounting sync, if connected — only one at a time), TrueLayer (open banking, if connected), Stripe (payment processing, if connected), Google/Microsoft (email/calendar/tasks sync, if connected), and push notification providers. Each only receives what’s needed for that specific feature.',
  },
  {
    heading: '6. How long we keep it',
    body: 'For as long as your account is active. If you request deletion (see the "Request Account Deletion" option in the app), we’ll action it as described there. Disconnecting a Google account (Settings) deletes the associated access tokens immediately, independent of any wider account deletion request.',
  },
  {
    heading: '7. Your rights (UK GDPR)',
    body: `You can: access the data we hold about you, correct it, ask us to delete it, export it in a portable format, restrict or object to certain processing, and complain to the ICO (ico.org.uk) if you think we've got it wrong. Use the "Export My Data" and "Request Account Deletion" actions in the app, or email ${SUPPORT_EMAIL}.`,
  },
  {
    heading: '8. Security',
    body: "Data is protected using row-level access controls so accounts can only see their own business's data (and staff/client accounts only what's relevant to them). No system is perfectly secure; we take reasonable technical measures and keep improving them.",
  },
  {
    heading: '9. Children',
    body: 'WorkBench is a business tool, not intended for anyone under 18.',
  },
  {
    heading: '10. Changes',
    body: "We'll update this policy as the app changes and note the date at the top.",
  },
  {
    heading: '11. Contact',
    body: SUPPORT_EMAIL,
  },
];

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ fontSize: 14, color: '#999', margin: '0 0 40px' }}>Last updated: 12 September 2026</p>

        <p style={{ fontSize: 15, color: '#666', lineHeight: 1.8, margin: '0 0 40px', padding: '16px 20px', backgroundColor: '#f0ede8', borderRadius: 10, border: '1px solid #ddd9d3' }}>
          This is a first draft, generated to match what WorkBench actually does today. It will be reviewed by a solicitor before we rely on it as a final policy — published now so you can see exactly what we collect and why while WorkBench is in beta.
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
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Contact</a>
          </div>
          <span style={{ color: '#ccc', fontSize: 12 }}>© 2026 WorkBench</span>
        </div>
      </footer>
    </main>
  );
}
