import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function WhyMatters() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section = { ...whyStyles.section, padding: `${mobile ? 56 : narrow ? 72 : 96}px ${padX}px` }
  const grid = { ...whyStyles.grid, gridTemplateColumns: narrow ? '1fr' : '1fr 1fr' }
  const card = { ...whyStyles.card, padding: mobile ? 26 : 44 }
  const h3 = { ...whyStyles.h3, fontSize: mobile ? 27 : 34 }

  return (
    <section id="families" style={section} data-screen-label="03 Why It Matters">
      <div style={whyStyles.inner}>
        <div style={grid} data-reveal>
          {/* LEFT — Why it matters */}
          <article className="tm-card-hover" style={card}>
            <div style={whyStyles.eyebrow}>FOR YOU + YOUR FAMILY</div>
            <h3 style={h3}>Why it matters</h3>
            <p style={whyStyles.lead}>
              Lorem ipsum dolor sit amet — children need you at your best, consectetur
              adipiscing elit sed do eiusmod.
            </p>
            <div style={whyStyles.subhead}>When you know what's beneath the surface:</div>
            <ul style={whyStyles.list}>
              {[
                'Respond more calmly in difficult moments',
                'Recognize when you need support — before reaching a limit',
                'Create protective boundaries that actually hold',
                'Preserve the strength to keep showing up',
              ].map((t) => (
                <li key={t} style={whyStyles.li}>
                  <span style={whyStyles.checkBox}>
                    <Icon name="check" size={11} color="#fff" strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div style={{ ...whyStyles.imgSlot, marginTop: 32 }}>
              <img
                src="/assets/photos/family-calm-moment.jpg"
                alt="A parent and child sharing a calm, connected moment at home"
                style={whyStyles.img}
              />
            </div>
          </article>

          {/* RIGHT — Designed for Utah foster families */}
          <article className="tm-card-hover" style={card}>
            <div style={whyStyles.eyebrow}>BUILT FOR THIS COMMUNITY</div>
            <h3 style={h3}>Designed for Utah foster families</h3>
            <p style={whyStyles.lead}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utah Foster Care
              supports your whole family — sed do eiusmod tempor incididunt.
            </p>
            <div style={whyStyles.featStack}>
              {[
                { i: 'lock', t: 'Available at no cost', d: 'For every licensed Utah foster family. No subscription. No paywall.' },
                { i: 'family', t: 'For the whole family', d: 'Use with your partner, your children, or just for yourself.' },
                { i: 'target', t: 'A personalized path', d: 'Recommendations tied to your actual resilience profile, not generic advice.' },
                { i: 'shield', t: 'Private by default', d: 'Your responses stay yours. Lorem ipsum dolor sit amet.' },
              ].map((f) => (
                <div key={f.t} style={whyStyles.featRow}>
                  <div style={whyStyles.featIcon}>
                    <Icon name={f.i} size={20} color="var(--tm-purple)" />
                  </div>
                  <div>
                    <div style={whyStyles.featTitle}>{f.t}</div>
                    <div style={whyStyles.featDesc}>{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <button className="tm-cta" style={whyStyles.cta}>Get free access →</button>
          </article>
        </div>
      </div>
    </section>
  )
}

const whyStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg-warm)', padding: '96px 64px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 },
  card: {
    background: '#fff', borderRadius: 20, padding: 44,
    border: '0.5px solid rgba(0,0,0,0.06)',
    fontFamily: 'var(--tm-sans)',
    display: 'flex', flexDirection: 'column',
  },
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500, marginBottom: 14,
  },
  h3: {
    fontFamily: 'var(--tm-serif)', fontSize: 34, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.2,
    letterSpacing: '-0.005em',
  },
  lead: {
    fontSize: 16, lineHeight: 1.6, color: 'var(--tm-text-2)',
    fontWeight: 300, marginTop: 14,
  },
  subhead: {
    fontSize: 14, fontWeight: 500, color: 'var(--tm-ink)',
    marginTop: 28, marginBottom: 14,
  },
  list: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 },
  li: {
    display: 'flex', alignItems: 'flex-start', gap: 12,
    fontSize: 15, color: 'var(--tm-text)', lineHeight: 1.5,
  },
  checkBox: {
    width: 18, height: 18, borderRadius: '50%',
    background: 'var(--tm-purple)',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, marginTop: 2,
  },
  imgSlot: {
    flex: 1, minHeight: 240,
    background: 'var(--tm-bg-warm)',
    borderRadius: 14,
    position: 'relative', overflow: 'hidden',
  },
  img: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
  },
  featStack: { marginTop: 24, display: 'flex', flexDirection: 'column', gap: 22 },
  featRow: { display: 'flex', gap: 16, alignItems: 'flex-start' },
  featIcon: {
    width: 44, height: 44, borderRadius: 12,
    background: 'var(--tm-purple-light)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  },
  featTitle: { fontSize: 15, fontWeight: 500, color: 'var(--tm-ink)', marginBottom: 4 },
  featDesc: { fontSize: 14, color: 'var(--tm-text-2)', fontWeight: 300, lineHeight: 1.55 },
  cta: {
    marginTop: 32, alignSelf: 'flex-start',
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '13px 26px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
}
