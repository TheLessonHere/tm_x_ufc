import type { CSSProperties } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Nav() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  return (
    <nav style={{ ...navStyles.bar, padding: `0 ${padX}px` }}>
      <a style={navStyles.brand} href="#top">
        <img src="/assets/ufc-logo-purple.png" alt="Utah Foster Care" style={navStyles.ufcLogo} />
        <span style={navStyles.x}>×</span>
        <img src="/assets/tm-glyph-green.png" alt="" style={navStyles.tmGlyph} />
        {!mobile && <span style={navStyles.tmWord}>Terrace Metrics</span>}
      </a>
      {!narrow && (
        <div style={navStyles.links}>
          {[
            { href: '#families', label: 'For Families' },
            { href: '#children', label: 'For Children' },
            { href: '#science', label: 'Science' },
            { href: '#about', label: 'About' },
            { href: '#path', label: 'Your Path' },
          ].map((l) => (
            <a key={l.href} className="nav-link" style={navStyles.link} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      )}
      <div style={navStyles.right}>
        {!mobile && <span style={navStyles.login}>Login</span>}
        <button className="tm-cta" style={navStyles.cta}>{mobile ? 'Get started' : 'Get started for free'}</button>
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
    fontFamily: 'var(--tm-sans)', whiteSpace: 'nowrap',
  },
}
