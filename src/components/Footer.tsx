import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Footer() {
  const cols = [
    { h: 'RESOURCES', l: ['Help center', 'The science', 'FAQ', 'Contact a specialist'] },
    { h: 'UTAH FOSTER CARE', l: ['Become a foster family', 'Training', 'Events', 'Donate'] },
    { h: 'LEGAL', l: ['Privacy', 'Terms', 'Accessibility', 'Data practices'] },
  ]

  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const f: CSSProperties = {
    ...footStyles.f,
    padding: `${mobile ? 56 : 80}px ${padX}px ${mobile ? 32 : 40}px`,
  }
  const inner: CSSProperties = {
    ...footStyles.inner,
    gridTemplateColumns: mobile ? '1fr 1fr' : narrow ? 'repeat(3, 1fr)' : '1.7fr 1fr 1fr 1fr',
    gap: mobile ? 32 : narrow ? 40 : 56,
  }
  const brandCol: CSSProperties = { ...footStyles.brandCol, gridColumn: narrow ? '1 / -1' : 'auto' }
  const bottomRow: CSSProperties = {
    ...footStyles.bottomRow,
    flexDirection: mobile ? 'column' : 'row',
    alignItems: mobile ? 'flex-start' : 'center',
    gap: mobile ? 10 : 0,
  }

  return (
    <footer style={f} data-screen-label="11 Footer">
      <div style={inner}>
        <div style={brandCol}>
          <div style={footStyles.partnerRow}>
            <img src="/assets/ufc-logo-white.png" alt="Utah Foster Care" style={footStyles.ufcLogo} />
            <span style={footStyles.partnerX}>×</span>
            <img src="/assets/tm-glyph-white.png" alt="" style={footStyles.tmGlyph} />
            <div style={footStyles.tmBlock}>Terrace Metrics</div>
          </div>
          <div style={footStyles.tag}>
            Resiliency For You — a partnership between Utah Foster Care and Terrace
            Metrics, supporting foster families across Utah.
          </div>
          <div style={footStyles.contactRow}>
            <div style={footStyles.contactPill}>
              <Icon name="message" size={14} color="rgba(255,255,255,0.7)" />
              <span>support@resiliencyforyou.com</span>
            </div>
          </div>
        </div>
        {cols.map((c) => (
          <div key={c.h} style={footStyles.col}>
            <div style={footStyles.h}>{c.h}</div>
            {c.l.map((it) => <a key={it} style={footStyles.l}>{it}</a>)}
          </div>
        ))}
      </div>
      <div style={footStyles.divider} />
      <div style={bottomRow}>
        <div style={footStyles.copy}>© 2026 Utah Foster Care × Terrace Metrics. All rights reserved.</div>
        <div style={footStyles.bottomMeta}>Lorem ipsum dolor sit amet — non-profit partnership notice</div>
      </div>
    </footer>
  )
}

const footStyles: Record<string, CSSProperties> = {
  f: { background: '#15191a', padding: '80px 64px 40px', fontFamily: 'var(--tm-sans)' },
  inner: {
    maxWidth: 1280, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1.7fr 1fr 1fr 1fr 1fr', gap: 56,
  },
  brandCol: {},
  partnerRow: { display: 'flex', alignItems: 'center', gap: 14 },
  ufcLogo: { height: 30, display: 'block', opacity: 0.95 },
  tmGlyph: { height: 27, display: 'block', opacity: 0.92 },
  partnerX: { fontFamily: 'var(--tm-serif)', fontSize: 18, color: 'rgba(255,255,255,0.4)' },
  tmBlock: { fontFamily: 'var(--tm-serif)', fontSize: 22, color: '#fff', whiteSpace: 'nowrap' },
  tag: {
    fontSize: 13.5, color: 'rgba(255,255,255,0.55)',
    marginTop: 18, maxWidth: 360, lineHeight: 1.55, fontWeight: 300,
  },
  contactRow: { marginTop: 22 },
  contactPill: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: 999,
    padding: '8px 14px', fontSize: 13, color: 'rgba(255,255,255,0.75)',
  },
  col: { display: 'flex', flexDirection: 'column', gap: 12 },
  h: {
    fontSize: 11, textTransform: 'uppercase', letterSpacing: '1px',
    color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginBottom: 4,
  },
  l: { fontSize: 13.5, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', cursor: 'pointer' },
  divider: { height: '0.5px', background: 'rgba(255,255,255,0.08)', margin: '56px auto 24px', maxWidth: 1280 },
  bottomRow: {
    maxWidth: 1280, margin: '0 auto',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontSize: 12, color: 'rgba(255,255,255,0.4)',
  },
  copy: {},
  bottomMeta: { fontStyle: 'italic' },
}
