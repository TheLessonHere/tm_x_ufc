import type { CSSProperties } from 'react'

export default function ClosingCTA() {
  return (
    <section style={closingStyles.section} data-screen-label="10 You Matter Too">
      <div style={closingStyles.inner}>
        <div style={closingStyles.eyebrow}>YOU MATTER TOO</div>
        <h2 style={closingStyles.h2}>
          This is your moment to pause,<br />
          breathe, and <span style={closingStyles.accent}>take care of you.</span>
        </h2>
        <p style={closingStyles.sub}>
          Lorem ipsum dolor sit amet — no pressure, no expectations. Just support, when
          you need it.
        </p>
        <div style={closingStyles.ctas}>
          <button style={closingStyles.primary}>Start your check-in →</button>
          <button style={closingStyles.secondary}>Talk to Utah Foster Care</button>
        </div>
        <div style={closingStyles.foot}>
          Free for Utah foster families  ·  10 minutes  ·  Your data is private
        </div>
      </div>
    </section>
  )
}

const closingStyles: Record<string, CSSProperties> = {
  section: {
    background: 'var(--tm-purple)',
    padding: '140px 64px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  inner: {
    maxWidth: 820, margin: '0 auto',
    position: 'relative', zIndex: 1,
  },
  eyebrow: {
    fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)', fontWeight: 500, marginBottom: 24,
    fontFamily: 'var(--tm-sans)',
  },
  h2: {
    fontFamily: 'var(--tm-serif)', fontSize: 64, fontWeight: 400,
    color: '#fff', margin: 0, lineHeight: 1.1,
    letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' },
  sub: {
    fontFamily: 'var(--tm-sans)', fontSize: 18, fontWeight: 300,
    color: 'rgba(255,255,255,0.85)', marginTop: 24,
    maxWidth: 540, marginInline: 'auto', lineHeight: 1.6,
  },
  ctas: {
    marginTop: 40, display: 'flex', gap: 12,
    justifyContent: 'center', flexWrap: 'wrap',
  },
  primary: {
    background: '#fff', color: 'var(--tm-purple)', border: 'none',
    borderRadius: 999, padding: '16px 32px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  secondary: {
    background: 'transparent', color: '#fff',
    border: '0.5px solid rgba(255,255,255,0.4)',
    borderRadius: 999, padding: '16px 32px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  foot: {
    marginTop: 36, fontSize: 13, color: 'rgba(255,255,255,0.6)',
    fontFamily: 'var(--tm-sans)', letterSpacing: '0.3px',
  },
}
