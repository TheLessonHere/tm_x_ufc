import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

const LINKS = [
  { href: '#families', label: 'For Families' },
  { href: '#children', label: 'For Children' },
  { href: '#science', label: 'Science' },
  { href: '#about', label: 'About' },
  { href: '#path', label: 'Your Path' },
]

export default function Nav() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64
  const [open, setOpen] = useState(false)

  // Collapse the dropdown if the viewport grows back to desktop.
  useEffect(() => {
    if (!narrow) setOpen(false)
  }, [narrow])

  return (
    <nav style={{ ...navStyles.bar, padding: `0 ${padX}px` }}>
      <a style={navStyles.brand} href="#top" onClick={() => setOpen(false)}>
        <img src="/assets/ufc-logo-purple.png" alt="Utah Foster Care" style={navStyles.ufcLogo} />
        <span style={navStyles.x}>×</span>
        <img src="/assets/tm-glyph-green.png" alt="" style={navStyles.tmGlyph} />
        {!mobile && <span style={navStyles.tmWord}>Terrace Metrics</span>}
      </a>

      {!narrow && (
        <div style={navStyles.links}>
          {LINKS.map((l) => (
            <a key={l.href} className="nav-link" style={navStyles.link} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <div style={navStyles.right}>
        {!narrow && (
          <a href="https://resiliencyforyou.com/wellness/login" className="tm-purple-hover" style={navStyles.login}>
            Login
          </a>
        )}
        {!mobile && (
          <a className="tm-cta" style={navStyles.cta} href="https://resiliencyforyou.com/wellness/signup/ufc">
            {narrow ? 'Get started' : 'Get started for free'}
          </a>
        )}
        {narrow && (
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            style={navStyles.hamburger}
          >
            <Icon name={open ? 'close' : 'menu'} size={24} color="var(--tm-ink)" strokeWidth={2} />
          </button>
        )}
      </div>

      {narrow && open && (
        <div className="nav-mobile-panel" style={{ ...navStyles.panel, padding: `8px ${padX}px 16px` }}>
          {LINKS.map((l) => (
            <a
              key={l.href}
              className="nav-mobile-link"
              style={navStyles.mobileLink}
              href={l.href}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="nav-mobile-link" style={navStyles.mobileLink} href="https://resiliencyforyou.com/wellness/login" onClick={() => setOpen(false)}>
            Login
          </a>
          <a
            className="tm-cta"
            style={navStyles.panelCta}
            href="https://resiliencyforyou.com/wellness/signup/ufc"
            onClick={() => setOpen(false)}
          >
            Get started for free
          </a>
        </div>
      )}
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
  login: { fontSize: 14, fontWeight: 500, color: 'var(--tm-ink)', cursor: 'pointer', textDecoration: 'none' },
  cta: {
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '11px 22px',
    fontSize: 14, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)', whiteSpace: 'nowrap',
    display: 'inline-block', textDecoration: 'none',
  },
  hamburger: {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 40, height: 40, padding: 0,
    background: 'transparent', border: 'none', cursor: 'pointer',
    color: 'var(--tm-ink)',
  },
  panel: {
    position: 'absolute', top: '100%', left: 0, right: 0,
    background: '#fff',
    borderBottom: '0.5px solid rgba(0,0,0,0.08)',
    boxShadow: '0 14px 30px rgba(0,0,0,0.08)',
    display: 'flex', flexDirection: 'column',
    fontFamily: 'var(--tm-sans)',
  },
  mobileLink: {
    color: 'var(--tm-ink)', fontSize: 16, fontWeight: 500,
    textDecoration: 'none',
    padding: '14px 12px', borderRadius: 10,
  },
  panelCta: {
    marginTop: 10,
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '13px 22px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
    display: 'block', textAlign: 'center', textDecoration: 'none',
  },
}
