import type { Metadata } from 'next';
import WaitlistForm from './components/WaitlistForm';

export const metadata: Metadata = {
  title: 'WorkBench — Construction Management App for UK Tradespeople · Coming Soon',
  description: 'The construction management app built for UK tradespeople. Daily check-ins, AI quoting, job phases, MTD compliance. Launching soon — join the waitlist.',
};

export default function HomePage() {
  return (
    <main style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif", backgroundColor: '#f5f2ed', color: '#1a1a18', margin: 0, padding: 0, overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '18px 48px', borderBottom: '1px solid #ddd9d3', position: 'sticky', top: 0, backgroundColor: '#f5f2edee', backdropFilter: 'blur(16px)', zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
          <span style={{ fontSize: 18, fontWeight: '800', color: '#1a1a18', letterSpacing: -0.5 }}>WorkBench</span>
        </div>
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
          <a href="#features" style={{ color: '#666', textDecoration: 'none', fontSize: 14, fontWeight: '500' }}>Features</a>
          <a href="#pricing" style={{ color: '#666', textDecoration: 'none', fontSize: 14, fontWeight: '500' }}>Pricing</a>
          <a href="#mtd" style={{ color: '#666', textDecoration: 'none', fontSize: 14, fontWeight: '500' }}>MTD</a>
          <a href="#waitlist" style={{ backgroundColor: '#1a1a18', color: '#f5f2ed', padding: '9px 20px', borderRadius: 6, textDecoration: 'none', fontWeight: '600', fontSize: 14, letterSpacing: -0.2 }}>Join waitlist</a>
        </div>
      </nav>

      {/* LAUNCH BANNER */}
      <div style={{ backgroundColor: '#f97316', padding: '10px 48px', textAlign: 'center' }}>
        <span style={{ color: '#fff', fontSize: 13, fontWeight: '600', letterSpacing: 0.3 }}>
          🚀 Launching on iOS & Android soon — join the waitlist for early access and a free extended trial
        </span>
      </div>

      {/* HERO */}
      <section style={{ padding: '80px 48px 0', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ borderBottom: '1px solid #ddd9d3', paddingBottom: 80 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 32 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#999', letterSpacing: 1, paddingTop: 4 }}>WB-001</span>
            <span style={{ width: 1, height: 20, backgroundColor: '#ddd9d3', marginTop: 3 }}></span>
            <span style={{ fontSize: 12, color: '#999', letterSpacing: 0.5, fontWeight: '500', paddingTop: 4 }}>FOR UK TRADESPEOPLE · COMING SOON</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 80, alignItems: 'end' }}>
            <div>
              <h1 style={{ fontSize: 76, fontWeight: '900', lineHeight: 1.0, marginBottom: 0, margin: '0 0 32px', letterSpacing: -4, color: '#1a1a18' }}>
                Your site.<br />
                Your numbers.<br />
                <span style={{ color: '#f97316' }}>Under control.</span>
              </h1>
              <p style={{ fontSize: 18, color: '#666', lineHeight: 1.75, maxWidth: 480, margin: '0 0 24px', fontWeight: '400' }}>
                WorkBench is the construction management app built around how you actually work on site — not how a software company thinks you do.
              </p>
              <p style={{ fontSize: 15, color: '#999', lineHeight: 1.6, maxWidth: 480, margin: '0 0 40px' }}>
                We're putting the finishing touches on. Join the waitlist to get early access, a free extended trial, and be first in line when we launch.
              </p>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <a href="#waitlist" style={{ backgroundColor: '#f97316', color: '#fff', padding: '15px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: '700', fontSize: 16, letterSpacing: -0.3 }}>
                  Join the waitlist →
                </a>
                <a href="#features" style={{ color: '#1a1a18', textDecoration: 'none', fontWeight: '500', fontSize: 15, display: 'flex', alignItems: 'center', gap: 6 }}>
                  See features
                  <span style={{ fontSize: 18 }}>↓</span>
                </a>
              </div>
              <p style={{ color: '#aaa', fontSize: 12, marginTop: 14, letterSpacing: 0.2 }}>Free extended trial for waitlist members · No spam ever</p>
            </div>
            <div>
              <div style={{ backgroundColor: '#1a1a18', borderRadius: 20, padding: 16, border: '1px solid #333' }}>
                <div style={{ backgroundColor: '#242420', borderRadius: 12, padding: 16, marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <span style={{ color: '#999', fontSize: 11, fontWeight: '600', letterSpacing: 0.5 }}>TUE 10 JUNE</span>
                    <span style={{ backgroundColor: '#22c55e20', color: '#22c55e', fontSize: 11, fontWeight: '700', padding: '3px 8px', borderRadius: 4, letterSpacing: 0.3 }}>CHECKED IN</span>
                  </div>
                  {[
                    { name: 'Bull Cottage', phase: 'First Fix', pct: 65, color: '#f97316' },
                    { name: 'High St Refurb', phase: 'Plastering', pct: 38, color: '#3b82f6' },
                    { name: 'Manor Farm', phase: 'Second Fix', pct: 82, color: '#22c55e' },
                  ].map(job => (
                    <div key={job.name} style={{ marginBottom: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                        <span style={{ color: '#e5e5e0', fontSize: 12, fontWeight: '600' }}>{job.name}</span>
                        <span style={{ color: job.color, fontSize: 11, fontWeight: '700' }}>{job.pct}%</span>
                      </div>
                      <div style={{ height: 3, backgroundColor: '#333', borderRadius: 2 }}>
                        <div style={{ height: 3, width: `${job.pct}%`, backgroundColor: job.color, borderRadius: 2 }} />
                      </div>
                      <span style={{ color: '#555', fontSize: 10, marginTop: 3, display: 'block' }}>{job.phase}</span>
                    </div>
                  ))}
                </div>
                <div style={{ backgroundColor: '#f9731615', borderRadius: 10, padding: 12, border: '1px solid #f9731625' }}>
                  <span style={{ color: '#f97316', fontSize: 11, fontWeight: '600', display: 'block', marginBottom: 3 }}>🤖 AI INSIGHT</span>
                  <span style={{ color: '#ccc', fontSize: 12, lineHeight: 1.5 }}>Bull Cottage drainage overdue by 3 days — reschedule?</span>
                </div>
              </div>
              <p style={{ color: '#aaa', fontSize: 11, textAlign: 'center', marginTop: 12, letterSpacing: 0.3 }}>iOS & ANDROID · COMING SOON</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF BAR */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #ddd9d3' }}>
          {[
            { num: '5 min', label: 'daily check-in' },
            { num: 'AI', label: 'powered quoting' },
            { num: 'MTD', label: 'compliant' },
            { num: '£0', label: 'setup cost' },
          ].map((stat, i) => (
            <div key={stat.label} style={{ flex: 1, padding: '28px 0', borderRight: i < 3 ? '1px solid #ddd9d3' : 'none', paddingLeft: i === 0 ? 0 : 32 }}>
              <div style={{ fontSize: 28, fontWeight: '900', color: '#1a1a18', letterSpacing: -1, lineHeight: 1 }}>{stat.num}</div>
              <div style={{ fontSize: 12, color: '#999', marginTop: 4, fontWeight: '500', letterSpacing: 0.3 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#999', letterSpacing: 1 }}>WB-002</span>
          <span style={{ width: 1, height: 16, backgroundColor: '#ddd9d3' }}></span>
          <span style={{ fontSize: 12, color: '#999', letterSpacing: 0.5, fontWeight: '500' }}>HOW IT WORKS</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: 48, fontWeight: '900', letterSpacing: -2, lineHeight: 1.05, marginBottom: 24, margin: '0 0 24px' }}>
              Built for a day on site. Not a day in an office.
            </h2>
            <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, margin: '0 0 40px' }}>
              Most construction software is designed by people who've never worn steel-toe boots. WorkBench is different. Every feature was designed around the reality of site work — limited time, dirty hands, no patience for complexity.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { time: '7:30am', title: 'Start your day', desc: 'Weather loads automatically. Check your active phases. See what\'s due today.' },
              { time: '8:00am', title: 'Voice check-in', desc: 'Speak your update. AI fills the form — hours, materials, scope changes. Done in 2 minutes.' },
              { time: '12:00pm', title: 'Client call', desc: 'Record what was discussed. AI extracts the variation, creates the task, logs the communication.' },
              { time: '5:00pm', title: 'End of day', desc: 'Site diary written. Schedule updated. Profit tracker live. Tomorrow planned.' },
            ].map((step, i) => (
              <div key={step.title} style={{ display: 'flex', gap: 24, padding: '24px 0', borderBottom: i < 3 ? '1px solid #ddd9d3' : 'none' }}>
                <div style={{ minWidth: 64 }}>
                  <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#f97316', fontWeight: '700', letterSpacing: 0.5 }}>{step.time}</span>
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: '700', color: '#1a1a18', marginBottom: 6, letterSpacing: -0.3 }}>{step.title}</div>
                  <div style={{ fontSize: 14, color: '#888', lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ backgroundColor: '#1a1a18', padding: '80px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#555', letterSpacing: 1 }}>WB-003</span>
            <span style={{ width: 1, height: 16, backgroundColor: '#333' }}></span>
            <span style={{ fontSize: 12, color: '#555', letterSpacing: 0.5, fontWeight: '500' }}>FEATURES</span>
          </div>
          <h2 style={{ fontSize: 48, fontWeight: '900', letterSpacing: -2, lineHeight: 1.05, marginBottom: 64, color: '#f5f2ed', maxWidth: 600 }}>
            Everything on one app. Nothing you don't need.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, backgroundColor: '#333' }}>
            {[
              { title: 'Daily check-ins', desc: 'Log hours, materials and progress in under 5 minutes. Voice or text — your choice. Generates a professional site diary automatically.', tag: 'Daily' },
              { title: 'Job & phase management', desc: 'Break every job into phases. See progress at a glance. Colour-coded, ordered, and linked to your calendar.', tag: 'Jobs' },
              { title: 'AI quoting', desc: 'Describe the job or upload drawings. Claude AI generates a full bill of quantities — labour, materials, fixings. Export to Excel instantly.', tag: 'AI' },
              { title: 'Gantt calendar', desc: 'Visual timeline across all your jobs and phases. AI scheduler moves things around when plans change, respecting hard deadlines.', tag: 'Planning' },
              { title: 'Job financials & invoicing', desc: 'Contract value, costs, variations — all tracked per job. Generate professional branded invoices and send directly to clients.', tag: 'Finance' },
              { title: 'MTD compliance', desc: 'Quarterly summaries generated automatically. CSV export. Xero integration. Never scramble for your accountant again.', tag: 'Tax' },
              { title: 'Subcontractor management', desc: 'Track hours, quotes and invoices for every sub across every job. GPS clock-in on mobile.', tag: 'Team' },
              { title: 'AI assistant', desc: 'Ask it anything. Write variation notices, draft client emails, summarise your week. Hands-free on site.', tag: 'AI' },
              { title: 'Client chat log', desc: 'Every conversation logged against the job. What was said, agreed, promised. Never disputed again.', tag: 'Comms' },
            ].map((feature, i) => (
              <div key={feature.title} style={{ backgroundColor: '#1a1a18', padding: '32px 28px' }}>
                <span style={{ fontFamily: 'monospace', fontSize: 10, color: '#f97316', letterSpacing: 1, fontWeight: '700', display: 'block', marginBottom: 16 }}>{feature.tag.toUpperCase()}</span>
                <h3 style={{ fontSize: 17, fontWeight: '700', color: '#f5f2ed', marginBottom: 10, margin: '0 0 10px', letterSpacing: -0.3 }}>{feature.title}</h3>
                <p style={{ fontSize: 13, color: '#666', lineHeight: 1.7, margin: 0 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MTD */}
      <section id="mtd" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px', borderBottom: '1px solid #ddd9d3' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#999', letterSpacing: 1 }}>WB-004</span>
          <span style={{ width: 1, height: 16, backgroundColor: '#ddd9d3' }}></span>
          <span style={{ fontSize: 12, color: '#999', letterSpacing: 0.5, fontWeight: '500' }}>MAKING TAX DIGITAL</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', backgroundColor: '#ef444410', border: '1px solid #ef444430', borderRadius: 4, padding: '4px 10px', marginBottom: 20 }}>
              <span style={{ color: '#ef4444', fontSize: 12, fontWeight: '700', letterSpacing: 0.5 }}>APRIL 2026 DEADLINE</span>
            </div>
            <h2 style={{ fontSize: 42, fontWeight: '900', letterSpacing: -1.5, lineHeight: 1.05, marginBottom: 20, margin: '0 0 20px' }}>
              MTD is here.<br />WorkBench has you covered.
            </h2>
            <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, marginBottom: 32, margin: '0 0 32px' }}>
              From April 2026, sole traders earning over £50,000 must submit quarterly updates to HMRC digitally. WorkBench tracks your income and expenses automatically throughout the year — so there's nothing to scramble for at deadline time.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Automatic income and expense tracking',
                'Quarterly MTD summaries generated instantly',
                'CSV export for your accountant',
                'Xero integration',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: '#22c55e', fontWeight: '700' }}>✓</span>
                  <span style={{ color: '#555', fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ backgroundColor: '#f0ede8', borderRadius: 16, padding: 28, border: '1px solid #ddd9d3' }}>
            <div style={{ fontSize: 11, color: '#999', fontWeight: '700', letterSpacing: 0.5, marginBottom: 16 }}>2025–26 TAX YEAR</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 16 }}>
              {[
                { q: 'Q1', income: '£18,450', expenses: '£6,230', status: 'Submitted' },
                { q: 'Q2', income: '£22,100', expenses: '£7,890', status: 'Submitted' },
                { q: 'Q3', income: '£19,800', expenses: '£5,440', status: 'Ready' },
                { q: 'Q4', income: '£24,300', expenses: '£8,120', status: 'In progress' },
              ].map(q => (
                <div key={q.q} style={{ backgroundColor: '#fff', borderRadius: 10, padding: 14, border: '1px solid #ddd9d3' }}>
                  <div style={{ fontSize: 11, color: '#999', fontWeight: '700', marginBottom: 8 }}>{q.q}</div>
                  <div style={{ fontSize: 15, fontWeight: '800', color: '#1a1a18', marginBottom: 2 }}>{q.income}</div>
                  <div style={{ fontSize: 12, color: '#999', marginBottom: 8 }}>− {q.expenses}</div>
                  <div style={{ fontSize: 10, fontWeight: '700', color: q.status === 'Submitted' ? '#22c55e' : q.status === 'Ready' ? '#f97316' : '#999', letterSpacing: 0.3 }}>{q.status.toUpperCase()}</div>
                </div>
              ))}
            </div>
            <div style={{ backgroundColor: '#f97316', borderRadius: 10, padding: 14, textAlign: 'center' }}>
              <div style={{ color: '#fff', fontSize: 11, fontWeight: '700', marginBottom: 4, opacity: 0.8 }}>NEXT DEADLINE</div>
              <div style={{ color: '#fff', fontSize: 22, fontWeight: '900', letterSpacing: -0.5 }}>31 October 2026</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px', borderBottom: '1px solid #ddd9d3' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#999', letterSpacing: 1 }}>WB-005</span>
          <span style={{ width: 1, height: 16, backgroundColor: '#ddd9d3' }}></span>
          <span style={{ fontSize: 12, color: '#999', letterSpacing: 0.5, fontWeight: '500' }}>PRICING</span>
        </div>
        <div style={{ marginBottom: 32, padding: '16px 20px', backgroundColor: '#f9731611', borderRadius: 10, border: '1px solid #f9731630', display: 'inline-block' }}>
          <span style={{ color: '#f97316', fontSize: 14, fontWeight: '600' }}>🎁 Waitlist members get an extended free trial when we launch</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, border: '1px solid #ddd9d3', borderRadius: 12, overflow: 'hidden' }}>
          {[
            {
              name: 'Tradesperson',
              price: '£9',
              desc: 'Sole traders',
              features: ['Unlimited jobs', 'Check-ins & site diary', 'Gantt calendar', 'AI assistant', 'MTD summaries', 'Photo capture'],
              highlight: false,
            },
            {
              name: 'Site Manager',
              price: '£19',
              desc: 'Contractors & site managers',
              features: ['Everything in Tradesperson', 'AI-powered BOQ quoting', 'Subcontractor management', 'Job financials & invoicing', 'Variations tracking', 'Phone call logger'],
              highlight: true,
            },
            {
              name: 'Growth',
              price: '£39',
              desc: 'Growing businesses',
              features: ['Everything in Site Manager', 'Employee hour tracking', 'Team scheduling', 'Xero integration', 'Advanced reporting', 'Priority support'],
              highlight: false,
            },
          ].map((plan, i) => (
            <div key={plan.name} style={{
              padding: 36,
              borderRight: i < 2 ? '1px solid #ddd9d3' : 'none',
              backgroundColor: plan.highlight ? '#1a1a18' : '#f5f2ed',
              position: 'relative',
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: 20, right: 20, backgroundColor: '#f97316', color: '#fff', padding: '3px 10px', borderRadius: 4, fontSize: 10, fontWeight: '700', letterSpacing: 0.5 }}>
                  POPULAR
                </div>
              )}
              <div style={{ fontSize: 13, fontWeight: '700', color: plan.highlight ? '#888' : '#999', marginBottom: 8, letterSpacing: 0.3 }}>{plan.name.toUpperCase()}</div>
              <div style={{ fontSize: 44, fontWeight: '900', color: plan.highlight ? '#f5f2ed' : '#1a1a18', letterSpacing: -2, marginBottom: 4, lineHeight: 1 }}>{plan.price}<span style={{ fontSize: 16, fontWeight: '500', opacity: 0.5 }}>/mo</span></div>
              <div style={{ fontSize: 13, color: plan.highlight ? '#666' : '#999', marginBottom: 28 }}>{plan.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <span style={{ color: '#f97316', fontSize: 13, fontWeight: '700', flexShrink: 0, marginTop: 1 }}>–</span>
                    <span style={{ fontSize: 13, color: plan.highlight ? '#aaa' : '#666', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
              <a href="#waitlist" style={{
                display: 'block', textAlign: 'center',
                backgroundColor: plan.highlight ? '#f97316' : 'transparent',
                color: plan.highlight ? '#fff' : '#1a1a18',
                padding: '12px', borderRadius: 6,
                textDecoration: 'none', fontWeight: '700', fontSize: 14,
                border: plan.highlight ? 'none' : '1px solid #ddd9d3',
              }}>
                Join waitlist
              </a>
            </div>
          ))}
        </div>
        <p style={{ color: '#aaa', fontSize: 13, marginTop: 16, textAlign: 'center' }}>Pricing confirmed at launch. Waitlist members locked in at these rates.</p>
      </section>

      {/* BUILT BY */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px', borderBottom: '1px solid #ddd9d3' }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#999', letterSpacing: 1 }}>WB-006</span>
          <span style={{ width: 1, height: 16, backgroundColor: '#ddd9d3' }}></span>
          <span style={{ fontSize: 12, color: '#999', letterSpacing: 0.5, fontWeight: '500' }}>WHY WORKBENCH</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 42, fontWeight: '900', letterSpacing: -1.5, lineHeight: 1.05, margin: '0 0 24px' }}>
              Built by people who understand construction.
            </h2>
            <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, margin: '0 0 24px' }}>
              Every other construction app was built by software companies who added a hard hat emoji and called it industry-specific. WorkBench was built from scratch around the real workflow of UK tradespeople.
            </p>
            <p style={{ fontSize: 16, color: '#666', lineHeight: 1.8, margin: '0 0 32px' }}>
              We're talking to tradespeople every day during development. If you want to shape the product — join the waitlist and tell us what you need.
            </p>
            <a href="#waitlist" style={{ backgroundColor: '#f97316', color: '#fff', padding: '14px 28px', borderRadius: 6, textDecoration: 'none', fontWeight: '700', fontSize: 15, display: 'inline-block' }}>
              Help shape WorkBench →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '🏗', title: 'Designed for site, not office', desc: 'Voice-first. Works with dirty hands. Minimal taps to log what matters.' },
              { icon: '🤖', title: 'AI that actually helps', desc: 'Claude AI reads your drawings, generates your BOQ, writes your variation notices. Not a chatbot — a real assistant.' },
              { icon: '📊', title: 'MTD ready from day one', desc: 'Built for the April 2026 deadline. Tracks everything automatically so there\'s nothing to scramble for.' },
              { icon: '💷', title: 'Priced for tradespeople', desc: 'From £9/month. No setup fees. No long contracts. Cancel anytime.' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, padding: '20px', backgroundColor: '#f0ede8', borderRadius: 12 }}>
                <span style={{ fontSize: 28, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: '700', color: '#1a1a18', marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#666', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 48px' }}>
        <div style={{ backgroundColor: '#1a1a18', borderRadius: 16, padding: '72px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 60 }}>
          <div style={{ maxWidth: 480 }}>
            <div style={{ display: 'inline-block', backgroundColor: '#f9731622', border: '1px solid #f9731640', borderRadius: 4, padding: '4px 12px', marginBottom: 20 }}>
              <span style={{ color: '#f97316', fontSize: 12, fontWeight: '700', letterSpacing: 0.5 }}>🚀 LAUNCHING SOON</span>
            </div>
            <h2 style={{ fontSize: 48, fontWeight: '900', letterSpacing: -2, lineHeight: 1.05, color: '#f5f2ed', margin: '0 0 20px' }}>
              Be first in line.
            </h2>
            <p style={{ fontSize: 17, color: '#666', lineHeight: 1.7, margin: '0 0 28px' }}>
              Join the waitlist and get early access the moment WorkBench launches on iOS and Android.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                '✓ Early access before public launch',
                '✓ Extended free trial — longer than standard',
                '✓ Locked-in pricing at current rates',
                '✓ Help shape the product before launch',
                '✓ No spam — launch notification only',
              ].map(item => (
                <div key={item} style={{ fontSize: 14, color: '#888' }}>{item}</div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 320, maxWidth: 420 }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #ddd9d3', padding: '36px 48px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <span style={{ fontSize: 15, fontWeight: '800', color: '#1a1a18' }}>WorkBench</span>
            <span style={{ color: '#ddd9d3' }}>|</span>
            <span style={{ color: '#aaa', fontSize: 13 }}>Built for UK tradespeople · Launching 2026</span>
          </div>
          <div style={{ display: 'flex', gap: 28 }}>
            <a href="#features" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Features</a>
            <a href="#pricing" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Pricing</a>
            <a href="#mtd" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>MTD</a>
            <a href="/privacy" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Privacy</a>
            <a href="/terms" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Terms</a>
            <a href="mailto:toolbeltsoftware@gmail.com" style={{ color: '#aaa', textDecoration: 'none', fontSize: 13 }}>Contact</a>
          </div>
          <span style={{ color: '#ccc', fontSize: 12 }}>© 2026 WorkBench</span>
        </div>
      </footer>

    </main>
  );
}