import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function FreeAccess() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section: CSSProperties = {
    ...freeStyles.section,
    padding: `${mobile ? 64 : narrow ? 80 : 120}px ${padX}px`,
  }
  const inner: CSSProperties = {
    ...freeStyles.inner,
    gridTemplateColumns: narrow ? '1fr' : '1fr 1fr',
    gap: narrow ? 48 : 80,
  }
  const right: CSSProperties = {
    ...freeStyles.right,
    justifyContent: narrow ? 'center' : 'flex-end',
  }
  const h2: CSSProperties = { ...freeStyles.h2, fontSize: mobile ? 36 : narrow ? 44 : 60 }

  return (
    <section style={section} data-screen-label="09 Free Access">
      <div style={inner} data-reveal>
        <div style={freeStyles.left}>
          <div style={freeStyles.eyebrow}>FREE FOR UTAH FOSTER FAMILIES</div>
          <h2 style={h2}>
            No cost.<br />
            No subscription.<br />
            <span style={freeStyles.accent}>Access now.</span>
          </h2>
          <p style={freeStyles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit — your license is
            covered through the Utah Foster Care partnership. Sed do eiusmod tempor
            incididunt ut labore.
          </p>
          <div style={freeStyles.ctas}>
            <button className="tm-cta" style={freeStyles.primary}>Get free access →</button>
            <button className="tm-link-nudge" style={freeStyles.secondary}>Already have an account · Log in</button>
          </div>
        </div>
        <div style={right}>
          <div className="tm-card-hover" style={freeStyles.card}>
            <div style={freeStyles.cardHead}>
              <div>
                <div style={freeStyles.cardEyebrow}>RESILIENCY FOR YOU</div>
                <div style={freeStyles.cardTitle}>Foster family license</div>
              </div>
              <span style={freeStyles.includedBadge}>INCLUDED</span>
            </div>
            <div style={freeStyles.bigPrice}>
              <span style={freeStyles.priceN}>$0</span>
              <span style={freeStyles.priceP}>/year</span>
            </div>
            <div style={freeStyles.priceCaption}>
              Sponsored by Utah Foster Care
            </div>
            <div style={freeStyles.featList}>
              {[
                'Adult, child & family check-ins',
                'Full resource library',
                'Self-paced workshops & curricula',
                'Utah Foster Care support pathways',
                'Re-check every 6–8 weeks',
                'Private by default',
              ].map((f) => (
                <div key={f} style={freeStyles.featRow}>
                  <span style={freeStyles.featCheck}>
                    <Icon name="check" size={11} color="#fff" strokeWidth={3} />
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const freeStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg)', padding: '120px 64px' },
  inner: {
    maxWidth: 1200, margin: '0 auto',
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
    alignItems: 'center',
  },
  left: {},
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500, marginBottom: 20,
    fontFamily: 'var(--tm-sans)',
  },
  h2: {
    fontFamily: 'var(--tm-serif)', fontSize: 60, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.08,
    letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  body: {
    fontFamily: 'var(--tm-sans)', fontSize: 17, fontWeight: 300,
    lineHeight: 1.65, color: 'var(--tm-text-2)',
    marginTop: 28, maxWidth: 460,
  },
  ctas: { marginTop: 36, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 },
  primary: {
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '15px 28px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  secondary: {
    background: 'transparent', color: 'var(--tm-ink)',
    border: 'none', borderRadius: 999, padding: 0,
    fontSize: 14, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
    textDecoration: 'underline', textUnderlineOffset: 4,
    textDecorationColor: 'rgba(0,0,0,0.2)',
  },
  right: { display: 'flex', justifyContent: 'flex-end' },
  card: {
    background: '#fff', borderRadius: 20, padding: 36,
    border: '0.5px solid rgba(0,0,0,0.08)',
    boxShadow: '0 14px 40px rgba(26,31,28,0.06)',
    width: '100%', maxWidth: 460,
    fontFamily: 'var(--tm-sans)',
  },
  cardHead: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  cardEyebrow: {
    fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-text-3)', fontWeight: 500,
  },
  cardTitle: {
    fontFamily: 'var(--tm-serif)', fontSize: 24, color: 'var(--tm-ink)',
    marginTop: 4,
  },
  includedBadge: {
    background: 'var(--tm-purple)', color: '#fff',
    borderRadius: 999, padding: '5px 12px',
    fontSize: 10, fontWeight: 500, letterSpacing: '0.5px',
  },
  bigPrice: { display: 'flex', alignItems: 'baseline', marginTop: 28 },
  priceN: { fontFamily: 'var(--tm-serif)', fontSize: 72, color: 'var(--tm-purple)', lineHeight: 1 },
  priceP: { fontSize: 16, color: 'var(--tm-text-3)', marginLeft: 8 },
  priceCaption: { fontSize: 13, color: 'var(--tm-text-3)', marginTop: 8 },
  featList: { marginTop: 28, display: 'flex', flexDirection: 'column', gap: 12 },
  featRow: { display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--tm-text)' },
  featCheck: {
    width: 18, height: 18, borderRadius: '50%',
    background: 'var(--tm-purple)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
}
