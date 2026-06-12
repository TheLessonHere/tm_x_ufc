import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Continuum() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section: CSSProperties = {
    ...continuumStyles.section,
    padding: `${mobile ? 64 : narrow ? 80 : 88}px ${padX}px`,
  }
  const h2: CSSProperties = { ...continuumStyles.h2, fontSize: mobile ? 30 : narrow ? 38 : 50 }
  const grid: CSSProperties = {
    ...continuumStyles.grid,
    gridTemplateColumns: mobile ? '1fr' : narrow ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
  }

  const zones = [
    {
      label: 'Optimal',
      n: 1, of: 4,
      c: '#1a7a42',
      bg: 'rgba(26,122,66,0.08)',
      d: 'Strengths across all domains with no evidence of adversity. Minimal specific attention likely — capable of fully attending to life goals.',
    },
    {
      label: 'Satisfactory',
      n: 2, of: 4,
      c: '#5ecc72',
      bg: 'rgba(94,204,114,0.08)',
      d: 'Strengths across many domains with minimal distress. Not likely to require specific attention. Functioning well, but not necessarily excelling.',
    },
    {
      label: 'Slight concern',
      n: 3, of: 4,
      c: '#e8a020',
      bg: 'rgba(232,160,32,0.08)',
      d: 'Some strengths, but low scores in key indicators. May require some attention, with likely impact on specific areas of life.',
    },
    {
      label: 'May need assistance',
      n: 4, of: 4,
      c: '#c0392b',
      bg: 'rgba(192,57,43,0.08)',
      d: 'Few or no strengths and elevated levels of adversity. Will likely require attention and support — functioning is likely affected, even if not noticeable.',
    },
  ]

  return (
    <section style={section} data-screen-label="08 Resilience Continuum">
      <div style={continuumStyles.inner}>
        <div style={continuumStyles.eyebrow}>HOW WE READ YOUR RESULTS</div>
        <h2 style={h2} data-reveal>
          A mirror, <span style={continuumStyles.accent}>not a measurement.</span>
        </h2>
        <p style={continuumStyles.sub} data-reveal>
          Your check-in places you somewhere on a continuum, not in a category. There are
          no right or wrong answers — just a reflection of where things are right now.
        </p>

        <div style={continuumStyles.specWrap}>
          <div style={continuumStyles.spec}>
            <div style={continuumStyles.specBar} />
            <div style={continuumStyles.specMarker}>
              <div style={continuumStyles.specMarkerDot} />
              <div style={continuumStyles.specMarkerLabel}>You</div>
            </div>
          </div>
          <div style={continuumStyles.specTicks}>
            {zones.slice().reverse().map((z) => (
              <span key={z.label}>{z.label}</span>
            ))}
          </div>
        </div>

        <div style={grid} data-reveal-stagger>
          {zones.map((z) => (
            <div key={z.label} style={{ ...continuumStyles.zone, background: z.bg, borderColor: z.c + '33' }}>
              <div style={continuumStyles.zoneTop}>
                <span style={{ ...continuumStyles.zoneSwatch, background: z.c }} />
                <span style={continuumStyles.zoneCount}>{z.n} of {z.of}</span>
              </div>
              <div style={{ ...continuumStyles.zoneLabel, color: z.c }}>{z.label}</div>
              <div style={continuumStyles.zoneDesc}>{z.d}</div>
            </div>
          ))}
        </div>

        <div style={continuumStyles.note} data-reveal>
          <Icon name="shield" size={16} color="var(--tm-purple)" />
          <span>
            <strong style={continuumStyles.noteStrong}>This is not a diagnosis.</strong>
            <span style={continuumStyles.noteRest}>  There are no right or wrong answers — it's a reflection of what you and your family may be experiencing right now.</span>
          </span>
        </div>
      </div>
    </section>
  )
}

const continuumStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg-warm)', padding: '120px 64px' },
  inner: { maxWidth: 1100, margin: '0 auto', textAlign: 'center' },
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500, marginBottom: 18,
    fontFamily: 'var(--tm-sans)',
  },
  h2: {
    fontFamily: 'var(--tm-serif)', fontSize: 50, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.15,
    letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  sub: {
    fontFamily: 'var(--tm-sans)', fontSize: 17, fontWeight: 300,
    color: 'var(--tm-text-2)', marginTop: 20, maxWidth: 660, marginInline: 'auto',
  },
  specWrap: { margin: '64px auto 16px', maxWidth: 720, position: 'relative' },
  spec: { height: 12, position: 'relative' },
  specBar: {
    height: 10, borderRadius: 999,
    background: 'var(--tm-spectrum)',
  },
  specMarker: {
    position: 'absolute', left: '68%', top: -22,
    transform: 'translateX(-50%)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
  },
  specMarkerLabel: {
    fontSize: 11, fontWeight: 500, color: 'var(--tm-ink)',
    background: '#fff', border: '0.5px solid rgba(0,0,0,0.1)',
    borderRadius: 999, padding: '3px 10px',
    fontFamily: 'var(--tm-sans)',
  },
  specMarkerDot: {
    width: 14, height: 14, borderRadius: '50%',
    background: '#fff', border: '2px solid var(--tm-ink)',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    marginTop: 28, position: 'absolute',
  },
  specTicks: {
    display: 'flex', justifyContent: 'space-between',
    fontSize: 11.5, color: 'var(--tm-text-3)',
    fontFamily: 'var(--tm-sans)', marginTop: 18, padding: '0 6px',
  },
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: 16, marginTop: 56, textAlign: 'left',
  },
  zone: {
    borderRadius: 14, padding: 22,
    border: '0.5px solid',
    fontFamily: 'var(--tm-sans)',
  },
  zoneTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  zoneSwatch: { width: 14, height: 14, borderRadius: 4 },
  zoneCount: {
    fontSize: 10, color: 'var(--tm-text-3)',
    letterSpacing: '0.5px', textTransform: 'uppercase',
  },
  zoneLabel: { fontSize: 18, fontWeight: 500, marginTop: 14 },
  zoneDesc: {
    fontSize: 13.5, color: 'var(--tm-text-2)',
    fontWeight: 300, lineHeight: 1.55, marginTop: 8,
  },
  note: {
    marginTop: 48, padding: '18px 24px',
    background: '#fff', border: '0.5px solid rgba(0,0,0,0.06)',
    borderRadius: 14,
    display: 'inline-flex', alignItems: 'center', gap: 12,
    fontFamily: 'var(--tm-sans)', fontSize: 14, textAlign: 'left',
  },
  noteStrong: { color: 'var(--tm-ink)', fontWeight: 500 },
  noteRest: { color: 'var(--tm-text-2)', fontWeight: 300 },
}
