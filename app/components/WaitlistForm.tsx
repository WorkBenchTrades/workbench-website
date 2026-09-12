'use client';

import { useState } from 'react';

const SUPABASE_URL = 'https://bnbclrluwayrrbxnlmyz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJuYmNscmx1d2F5cnJieG5sbXl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MTA1MDMsImV4cCI6MjA5NjE4NjUwM30.rEqK0JiCmwvh0Nvz17rkis8llWhXxqpxpyqb_yq0oQc';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [trade, setTrade] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) { setError('Please enter your email'); return; }
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email, name, trade }),
      });

      if (res.ok) {
        setSuccess(true);
      } else if (res.status === 409) {
        setError('You\'re already on the list!');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    }
    setLoading(false);
  }

  if (success) {
    return (
      <div style={{ backgroundColor: '#22c55e15', border: '1px solid #22c55e40', borderRadius: 12, padding: '24px 28px', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>🎉</div>
        <div style={{ color: '#f5f2ed', fontSize: 18, fontWeight: '700', marginBottom: 8 }}>You're on the list!</div>
        <div style={{ color: '#888', fontSize: 14, lineHeight: 1.6 }}>We'll email you the moment WorkBench is live on the App Store. You'll get early access and a free extended trial.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
      <div style={{ marginBottom: 10, fontSize: 13, color: '#888', fontWeight: '600', letterSpacing: 0.3 }}>
        🚀 LAUNCHING SOON — GET EARLY ACCESS
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #333', backgroundColor: '#242420', color: '#f5f2ed', fontSize: 14, outline: 'none', width: '100%' }}
        />
        <input
          type="email"
          placeholder="Your email address *"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #333', backgroundColor: '#242420', color: '#f5f2ed', fontSize: 14, outline: 'none', width: '100%' }}
        />
        <select
          value={trade}
          onChange={e => setTrade(e.target.value)}
          style={{ padding: '12px 16px', borderRadius: 8, border: '1px solid #333', backgroundColor: '#242420', color: trade ? '#f5f2ed' : '#888', fontSize: 14, outline: 'none', width: '100%' }}
        >
          <option value="">Your trade (optional)</option>
          <option value="carpenter">Carpenter / Joiner</option>
          <option value="site_manager">Site Manager</option>
          <option value="main_contractor">Main Contractor</option>
          <option value="subcontractor">Subcontractor</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="bricklayer">Bricklayer</option>
          <option value="other">Other Trade</option>
        </select>
        {error && <div style={{ color: '#ef4444', fontSize: 13 }}>{error}</div>}
        <button
          type="submit"
          disabled={loading}
          style={{ padding: '14px', borderRadius: 8, border: 'none', backgroundColor: '#f97316', color: '#fff', fontSize: 15, fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Joining...' : 'Join the waitlist →'}
        </button>
        <p style={{ color: '#555', fontSize: 12, margin: 0, textAlign: 'center' }}>Free extended trial for waitlist members · No spam ever</p>
      </div>
    </form>
  );
}