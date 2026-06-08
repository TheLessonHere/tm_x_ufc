import type { CSSProperties } from 'react'

export default function Nav() {
  return (
    <nav style={navStyles.bar}>
      <a style={navStyles.brand} href="#top">
        <img src="/assets/ufc-logo-purple.png" alt="Utah Foster Care" style={navStyles.ufcLogo} />
        <span style={navStyles.x}>×</span>
        <img src="/assets/tm-glyph-green.png" alt="" style={navStyles.tmGlyph} />
        <span style={navStyles.tmWord}>Terrace Metrics</span>
      </a>
      <div style={navStyles.links}>
        <a style={navStyles.link} href="#about">About</a>
        <a style={navStyles.link} href="#families">For Families</a>
        <a style={navStyles.link} href="#children">For Children</a>
        <a style={navStyles.link} href="#science">Science</a>
        <a style={navStyles.link} href="#path">Your Path</a>
      </div>
      <div style={navStyles.right}>
        <span style={navStyles.login}>Login</span>
        <button style={navStyles.cta}>Get started for free</button>
      </div>
    </nav>
  )
}

const navStyles: Record<string, CSSProperties> = {
  bar: {
    position: 'sticky', top: 0, zIndex: 50,
    height: 72, background: '#fff',
    borderBottom: '0.5px solid rgba(0,0,0,0.08)',
    display: 'flex', alignItems: 'center',
    padding: '0 64px',
    fontFamily: 'var(--tm-sans)',
  },
  brand: { display: 'flex', alignItems: 'center', gap: 14, flex: 1, textDecoration: 'none' },
  ufcLogo: { height: 30, display: 'block' },
  tmGlyph: { height: 25, display: 'block' },
  x: { fontFamily: 'var(--tm-serif)', fontSize: 18, color: 'rgba(26,26,26,0.32)' },
  tmWord: { fontFamily: 'var(--tm-serif)', fontSize: 19, color: 'var(--tm-ink)', whiteSpace: 'nowrap', marginLeft: -4 },
  links: { display: 'flex', gap: 32, flex: 2, justifyContent: 'center' },
  link: { color: 'var(--tm-ink)', fontSize: 14, textDecoration: 'none', fontWeight: 500 },
  right: { flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 20 },
  login: { fontSize: 14, fontWeight: 500, color: 'var(--tm-ink)', cursor: 'pointer' },
  cta: {
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '11px 22px',
    fontSize: 14, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
}
