import type { CSSProperties } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'
import CountUp from './CountUp'

export default function Science() {
  const pillars = [
    { n: '01', t: 'Behavioral outcomes', d: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.' },
    { n: '02', t: 'Academic outcomes', d: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.' },
    { n: '03', t: 'Professional outcomes', d: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.' },
    { n: '04', t: 'Whole-life outcomes', d: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.' },
  ]

  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section: CSSProperties = {
    ...scienceStyles.section,
    padding: `${mobile ? 64 : narrow ? 80 : 120}px ${padX}px`,
  }
  const top: CSSProperties = {
    ...scienceStyles.top,
    gridTemplateColumns: narrow ? '1fr' : '1.2fr 1fr',
    gap: mobile ? 24 : narrow ? 40 : 64,
  }
  const h2: CSSProperties = { ...scienceStyles.h2, fontSize: mobile ? 28 : narrow ? 36 : 46 }
  const pillarRow: CSSProperties = {
    ...scienceStyles.pillarRow,
    gridTemplateColumns: mobile ? '1fr' : narrow ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    marginTop: mobile ? 48 : 72,
  }
  const statBand: CSSProperties = {
    ...scienceStyles.statBand,
    gridTemplateColumns: narrow ? 'repeat(2, 1fr)' : '1fr auto 1fr auto 1fr auto 1fr',
    gap: narrow ? '28px 16px' : 0,
    padding: mobile ? '32px 24px' : '40px 48px',
  }
  const statN: CSSProperties = { ...scienceStyles.statN, fontSize: mobile ? 38 : 48 }

  return (
    <section style={section} data-screen-label="05 Science">
      <div style={scienceStyles.inner}>
        <div style={top} data-reveal>
          <div style={scienceStyles.left}>
            <div style={scienceStyles.eyebrow}>THE SCIENCE OF RESILIENCE</div>
            <h2 style={h2}>
              Resilience isn't a wellness concept.<br />
              It's one of the <span style={scienceStyles.accent}>strongest predictors</span>
              <br />of long-term outcomes.
            </h2>
          </div>
          <div style={scienceStyles.right}>
            <p style={scienceStyles.lead}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p style={scienceStyles.lead}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur — a research-backed platform, not just
              another wellness app.
            </p>
          </div>
        </div>

        <div style={pillarRow} data-reveal-stagger>
          {pillars.map((p) => (
            <div key={p.n} style={scienceStyles.pillar}>
              <div style={scienceStyles.pillarN}>{p.n}</div>
              <div style={scienceStyles.pillarT}>{p.t}</div>
              <div style={scienceStyles.pillarD}>{p.d}</div>
            </div>
          ))}
        </div>

        <div style={statBand} data-reveal>
          <div style={scienceStyles.statBlock}>
            <div style={statN}><CountUp to={20} suffix="+" /></div>
            <div style={scienceStyles.statL}>Years of validated research</div>
          </div>
          {!narrow && <div style={scienceStyles.statDivider} />}
          <div style={scienceStyles.statBlock}>
            <div style={statN}><CountUp to={5} suffix="M+" /></div>
            <div style={scienceStyles.statL}>Individuals assessed</div>
          </div>
          {!narrow && <div style={scienceStyles.statDivider} />}
          <div style={scienceStyles.statBlock}>
            <div style={statN}><CountUp to={97} suffix="%" /></div>
            <div style={scienceStyles.statL}>Report actionable insight</div>
          </div>
          {!narrow && <div style={scienceStyles.statDivider} />}
          <div style={scienceStyles.statBlock}>
            <div style={statN}><CountUp to={40} suffix="+" /></div>
            <div style={scienceStyles.statL}>Peer-reviewed citations</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const scienceStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg-warm)', padding: '120px 64px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  top: { display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'flex-start' },
  left: {},
  right: {},
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500, marginBottom: 18,
    fontFamily: 'var(--tm-sans)',
  },
  h2: {
    fontFamily: 'var(--tm-serif)', fontSize: 46, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.18,
    letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  lead: {
    fontFamily: 'var(--tm-sans)', fontSize: 16, fontWeight: 300,
    lineHeight: 1.7, color: 'var(--tm-text-2)',
    marginTop: 0, marginBottom: 16,
  },
  pillarRow: {
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24, marginTop: 72,
  },
  pillar: {
    background: '#fff', borderRadius: 14, padding: 28,
    border: '0.5px solid rgba(0,0,0,0.06)',
    fontFamily: 'var(--tm-sans)',
  },
  pillarN: {
    fontFamily: 'var(--tm-serif)', fontSize: 44,
    color: 'var(--tm-text-mute)', lineHeight: 1, marginBottom: 22,
  },
  pillarT: { fontSize: 17, fontWeight: 500, color: 'var(--tm-ink)', marginBottom: 8 },
  pillarD: { fontSize: 14, color: 'var(--tm-text-2)', fontWeight: 300, lineHeight: 1.55 },
  statBand: {
    marginTop: 56, padding: '40px 48px',
    background: 'var(--tm-green)',
    borderRadius: 20,
    display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr',
    alignItems: 'center', gap: 0,
  },
  statBlock: { textAlign: 'center', fontFamily: 'var(--tm-sans)' },
  statN: {
    fontFamily: 'var(--tm-serif)', fontSize: 48,
    color: '#fff', lineHeight: 1,
  },
  statL: {
    fontSize: 13, color: 'rgba(255,255,255,0.6)',
    marginTop: 10, fontWeight: 400,
  },
  statDivider: { width: 1, height: 40, background: 'rgba(255,255,255,0.1)' },
}
