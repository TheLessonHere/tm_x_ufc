import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function ForChildren() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section = { ...childrenStyles.section, padding: `${mobile ? 64 : narrow ? 80 : 88}px ${padX}px` }
  const h2 = { ...childrenStyles.h2, fontSize: mobile ? 28 : narrow ? 38 : 48 }
  const grid = {
    ...childrenStyles.grid,
    gridTemplateColumns: narrow ? '1fr' : '1fr 1.05fr',
    marginTop: mobile ? 40 : 64,
  }
  const card = { ...childrenStyles.card, padding: mobile ? 26 : 40 }

  return (
    <section id="children" style={section} data-screen-label="04 For Children">
      <div style={childrenStyles.inner} data-reveal-stagger>
        <div style={childrenStyles.eyebrow}>FOR FOSTER CHILDREN — AGES 8+</div>
        <h2 style={h2}>
          A path forward for your child,<br />
          and the <span style={childrenStyles.accent}>insight</span> to walk it with them.
        </h2>
        <p style={childrenStyles.lead}>
          Children get age-appropriate resilience support that meets them where they are,
          at their own pace. Parents gain personalized guidance based on their child's
          actual profile — not general advice.
        </p>

        <div style={grid}>
          {/* Child card */}
          <div className="tm-card-hover" style={card}>
            <div style={childrenStyles.cardEyebrow}>FOR YOUR CHILD</div>
            <div style={childrenStyles.illust}>
              <img
                src="/assets/photos/children-ages-8plus.jpg"
                alt="Children ages 8 and up spending time together"
                style={childrenStyles.illustImg}
              />
            </div>
            <div style={childrenStyles.cardTitle}>Resilience support, in their own voice</div>
            <ul style={childrenStyles.list}>
              {[
                'Age-appropriate check-in for ages 8+',
                'Their own pace, their own answers',
                "Builds language for what they're feeling",
                'Resources tied to their unique profile',
              ].map((t) => (
                <li key={t} style={childrenStyles.li}>
                  <span style={childrenStyles.dot} />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Parent card */}
          <div className="tm-card-hover" style={{ ...card, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <div style={childrenStyles.cardEyebrow}>FOR YOU AS THE PARENT</div>
            <div style={childrenStyles.illust}>
              <img
                src="/assets/photos/parent-child-path.jpg"
                alt="A parent guiding their child, walking the path forward together"
                style={childrenStyles.illustImg}
              />
            </div>
            <div style={{ ...childrenStyles.cardTitle, fontSize: mobile ? 24 : 28, marginTop: 28 }}>
              Concrete insight into how to support them
            </div>
            <p style={childrenStyles.parentLead}>
              Not general advice, but personalized guidance shaped by your child's actual
              resilience profile.
            </p>
            <div style={childrenStyles.parentList}>
              {[
                { t: 'A shared path forward', d: 'You see what they see — and the next steps you can take together.' },
                { t: 'Resources at every level', d: 'Tools matched to their profile, available the moment you need them.' },
                { t: 'Support from Utah Foster Care', d: 'Utah Foster Care personnel are on hand for personalized support and guidance.' },
              ].map((b) => (
                <div key={b.t} style={childrenStyles.parentRow}>
                  <span style={childrenStyles.parentCheck}>
                    <Icon name="check" size={11} color="#fff" strokeWidth={3} />
                  </span>
                  <div>
                    <div style={childrenStyles.parentTitle}>{b.t}</div>
                    <div style={childrenStyles.parentDesc}>{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="tm-cta" style={childrenStyles.parentBtn}>Start your family's journey →</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const childrenStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg)', padding: '120px 64px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500, marginBottom: 18,
    fontFamily: 'var(--tm-sans)',
  },
  h2: {
    fontFamily: 'var(--tm-serif)', fontSize: 48, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.18,
    letterSpacing: '-0.01em', maxWidth: 880,
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  lead: {
    fontFamily: 'var(--tm-sans)', fontSize: 18, fontWeight: 300,
    lineHeight: 1.6, color: 'var(--tm-text-2)',
    marginTop: 24, maxWidth: 760,
  },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 28, marginTop: 64 },
  card: {
    background: '#fff', borderRadius: 20, padding: 40,
    border: '0.5px solid rgba(0,0,0,0.06)',
    fontFamily: 'var(--tm-sans)',
  },
  cardEyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500,
  },
  illust: {
    marginTop: 24, height: 220,
    background: 'var(--tm-bg-warm)',
    borderRadius: 14,
    position: 'relative', overflow: 'hidden',
  },
  illustImg: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
  },
  cardTitle: {
    fontFamily: 'var(--tm-serif)', fontSize: 24, fontWeight: 400,
    color: 'var(--tm-ink)', marginTop: 28, marginBottom: 16,
    lineHeight: 1.25,
  },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 },
  li: {
    display: 'flex', alignItems: 'center', gap: 12,
    fontSize: 15, color: 'var(--tm-text)',
  },
  dot: {
    width: 6, height: 6, borderRadius: '50%',
    background: 'var(--tm-purple)', flexShrink: 0,
  },
  parentLead: {
    fontSize: 16, lineHeight: 1.6, color: 'var(--tm-text-2)',
    fontWeight: 300, marginTop: 16, marginBottom: 32,
  },
  parentList: { display: 'flex', flexDirection: 'column', gap: 20 },
  parentRow: { display: 'flex', gap: 14, alignItems: 'flex-start' },
  parentCheck: {
    width: 22, height: 22, borderRadius: '50%',
    background: 'var(--tm-purple)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, marginTop: 2,
  },
  parentTitle: { fontSize: 16, fontWeight: 500, marginBottom: 4, color: 'var(--tm-purple)' },
  parentDesc: {
    fontSize: 14, color: 'var(--tm-text-2)',
    fontWeight: 300, lineHeight: 1.55,
  },
  parentBtn: {
    marginTop: 36,
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '13px 26px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
}
