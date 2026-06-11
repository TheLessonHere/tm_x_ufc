import { useState } from 'react'
import type { CSSProperties, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function LoginPage() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // UI only for now — the magic-link request will hit the backend once it's wired.
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <div style={{ ...s.page, gridTemplateColumns: narrow ? '1fr' : '1fr 1fr' }}>
      {/* Form side */}
      <div style={{ ...s.formSide, padding: mobile ? '28px 22px' : '48px 56px' }}>
        <Link to="/" className="tm-purple-hover" style={s.back}>
          <Icon name="arrowLeft" size={16} color="currentColor" />
          Back to home
        </Link>

        <div style={s.formInner}>
          <Link to="/" style={s.brand}>
            <img src="/assets/ufc-logo-purple.png" alt="Utah Foster Care" style={s.ufcLogo} />
            <span style={s.brandX}>×</span>
            <img src="/assets/tm-glyph-green.png" alt="" style={s.tmGlyph} />
            <span style={s.brandWord}>Terrace Metrics</span>
          </Link>

          <h1 style={{ ...s.h1, fontSize: mobile ? 32 : 40 }}>
            Welcome <span style={s.accent}>back.</span>
          </h1>
          <p style={s.sub}>Sign in to continue your resiliency journey.</p>

          {!submitted ? (
            <form onSubmit={onSubmit} style={s.form}>
              <div>
                <label htmlFor="email" style={s.label}>Email</label>
                <div style={s.inputWrap}>
                  <span style={s.inputIcon}>
                    <Icon name="mail" size={18} color="rgba(26,26,26,0.4)" />
                  </span>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="login-input"
                    style={s.input}
                  />
                </div>
              </div>
              <button type="submit" className="tm-cta" style={s.submit}>
                Send access link
              </button>
            </form>
          ) : (
            <div style={s.successBox}>
              <span style={{ flexShrink: 0, marginTop: 1 }}>
                <Icon name="mail" size={18} color="var(--tm-green)" />
              </span>
              <div>
                <div style={s.successTitle}>Check your email</div>
                <div style={s.successText}>
                  We sent a secure login link to <strong>{email}</strong>. Click it to sign in.
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="tm-purple-hover"
                  style={s.tryAgain}
                >
                  Use a different email
                </button>
              </div>
            </div>
          )}

          <p style={s.terms}>
            By continuing, you agree to our{' '}
            <span className="tm-purple-hover" style={s.termsLink}>Terms of Service</span> and{' '}
            <span className="tm-purple-hover" style={s.termsLink}>Privacy Policy</span>.
          </p>

          <div style={s.privacyNote}>
            <span style={{ flexShrink: 0, marginTop: 1 }}>
              <Icon name="shield" size={16} color="var(--tm-purple)" />
            </span>
            <p style={s.privacyText}>
              Your information is encrypted, never sold, and protected so that only you can access
              your results.
            </p>
          </div>

          <p style={s.newHere}>
            New here?{' '}
            <Link to="/" className="tm-purple-hover" style={s.newHereLink}>
              Get started for free
            </Link>
          </p>
        </div>

        <div style={s.copyright}>© 2026 Utah Foster Care × Terrace Metrics</div>
      </div>

      {/* Brand panel — desktop only */}
      {!narrow && (
        <div style={s.brandPanel}>
          <div style={s.brandPanelTop}>
            <img src="/assets/ufc-logo-white.png" alt="Utah Foster Care" style={s.panelUfc} />
            <span style={s.panelX}>×</span>
            <img src="/assets/tm-glyph-white.png" alt="" style={s.panelGlyph} />
            <span style={s.panelWord}>Terrace Metrics</span>
          </div>

          <div style={s.brandPanelBottom}>
            <div style={s.quote}>
              “A moment to pause and take care of myself — I feel more steady, and more present
              for my family.”
            </div>
            <div style={s.quoteBy}>A Utah foster parent</div>
            <div style={s.statRow}>
              {[
                { n: '5M+', l: 'individuals assessed' },
                { n: '97%', l: 'report actionable insight' },
                { n: '20+', l: 'years of research' },
              ].map((st) => (
                <div key={st.l}>
                  <div style={s.statN}>{st.n}</div>
                  <div style={s.statL}>{st.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const s: Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh', width: '100%', display: 'grid',
    background: 'var(--tm-bg)', fontFamily: 'var(--tm-sans)',
  },
  formSide: { display: 'flex', flexDirection: 'column' },
  back: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontSize: 14, fontWeight: 500, color: 'var(--tm-ink)', textDecoration: 'none',
  },
  formInner: { width: '100%', maxWidth: 400, margin: 'auto', padding: '40px 0' },
  brand: {
    display: 'flex', alignItems: 'center', gap: 12,
    marginBottom: 30, textDecoration: 'none',
  },
  ufcLogo: { height: 28, display: 'block' },
  tmGlyph: { height: 24, display: 'block' },
  brandX: { fontFamily: 'var(--tm-serif)', fontSize: 17, color: 'rgba(26,26,26,0.32)' },
  brandWord: { fontFamily: 'var(--tm-serif)', fontSize: 20, color: 'var(--tm-ink)', marginLeft: -2 },
  h1: {
    fontFamily: 'var(--tm-serif)', fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.15, letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  sub: {
    fontWeight: 300, fontSize: 16, lineHeight: 1.6,
    color: 'var(--tm-text-2)', marginTop: 12, marginBottom: 32,
  },
  form: { display: 'flex', flexDirection: 'column', gap: 18 },
  label: { display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--tm-ink)', marginBottom: 8 },
  inputWrap: { position: 'relative' },
  inputIcon: { position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', display: 'flex' },
  input: {
    width: '100%', height: 48, borderRadius: 12,
    border: '0.5px solid rgba(0,0,0,0.15)',
    padding: '0 14px 0 42px', fontSize: 15,
    fontFamily: 'var(--tm-sans)', color: 'var(--tm-ink)',
    background: '#fff', outline: 'none',
  },
  submit: {
    marginTop: 8, width: '100%', height: 50,
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  successBox: {
    display: 'flex', gap: 12, alignItems: 'flex-start',
    padding: '16px 18px', borderRadius: 12,
    background: 'var(--tm-green-light)', border: '0.5px solid rgba(74,124,89,0.25)',
  },
  successTitle: { fontSize: 15, fontWeight: 500, color: 'var(--tm-ink)' },
  successText: { fontSize: 13.5, color: 'var(--tm-text-2)', lineHeight: 1.55, marginTop: 4 },
  tryAgain: {
    marginTop: 10, padding: 0, background: 'transparent', border: 'none',
    color: 'var(--tm-purple)', fontSize: 13, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  terms: {
    fontSize: 12, color: 'var(--tm-text-3)', lineHeight: 1.55,
    marginTop: 28, textAlign: 'center',
  },
  termsLink: {
    color: 'var(--tm-purple)', cursor: 'pointer',
    textDecoration: 'underline', textUnderlineOffset: 3,
  },
  privacyNote: {
    display: 'flex', gap: 10, alignItems: 'flex-start',
    marginTop: 20, padding: '12px 14px', borderRadius: 12,
    background: 'var(--tm-purple-light)', border: '0.5px solid rgba(85,36,102,0.18)',
  },
  privacyText: { fontSize: 12, color: 'var(--tm-text-2)', lineHeight: 1.55, margin: 0 },
  newHere: { fontSize: 14, textAlign: 'center', marginTop: 28, color: 'var(--tm-text-2)' },
  newHereLink: { color: 'var(--tm-purple)', fontWeight: 500, textDecoration: 'none' },
  copyright: { fontSize: 12, textAlign: 'center', color: 'var(--tm-text-4)' },

  brandPanel: {
    background:
      'radial-gradient(ellipse 60% 50% at 28% 18%, rgba(255,255,255,0.07), transparent 60%), var(--tm-purple)',
    color: '#fff', display: 'flex', flexDirection: 'column',
    padding: 56, position: 'relative', overflow: 'hidden',
  },
  brandPanelTop: { display: 'flex', alignItems: 'center', gap: 12 },
  panelUfc: { height: 28, display: 'block', opacity: 0.95 },
  panelGlyph: { height: 25, display: 'block', opacity: 0.92 },
  panelX: { fontFamily: 'var(--tm-serif)', fontSize: 17, color: 'rgba(255,255,255,0.4)' },
  panelWord: { fontFamily: 'var(--tm-serif)', fontSize: 20, color: '#fff', marginLeft: -2 },
  brandPanelBottom: { marginTop: 'auto' },
  quote: {
    fontFamily: 'var(--tm-serif)', fontStyle: 'italic',
    fontSize: 30, lineHeight: 1.4, color: '#fff', maxWidth: 460, margin: 0,
  },
  quoteBy: { marginTop: 16, fontSize: 14, fontWeight: 300, color: 'rgba(255,255,255,0.75)' },
  statRow: { display: 'flex', gap: 36, marginTop: 40 },
  statN: { fontFamily: 'var(--tm-serif)', fontSize: 34, color: '#fff', lineHeight: 1, letterSpacing: '-0.01em' },
  statL: { fontSize: 12, color: 'rgba(255,255,255,0.7)', marginTop: 6, fontWeight: 300, maxWidth: 120 },
}
