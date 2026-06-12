import type { CSSProperties } from 'react'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Mission() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section: CSSProperties = {
    ...missionStyles.section,
    padding: `${mobile ? 64 : narrow ? 72 : 72}px ${padX}px`,
  }
  const h2: CSSProperties = { ...missionStyles.h2, fontSize: mobile ? 30 : narrow ? 40 : 52 }

  return (
    <section style={section} data-screen-label="02 Mission">
      <div style={missionStyles.inner} data-reveal-stagger>
        <div style={missionStyles.eyebrow}>OUR PROMISE TO YOU</div>
        <h2 style={h2}>
          Caring for others starts with<br />
          taking care of <span style={missionStyles.accent}>you.</span>
        </h2>
        <p style={missionStyles.lead}>
          Foster parenting is meaningful — and it can also be heavy. There are moments
          when you feel it building, not because something is wrong, but because something
          inside you needs attention.
        </p>
        <p style={missionStyles.body}>
          This space was created for those moments. It's not about fixing yourself or
          proving your strength — it's simply a chance to pause, reflect, and notice what
          you've been carrying.
        </p>
        <p style={missionStyles.body}>
          There's no judgment. No diagnosis. Think of it as a mirror, not a measurement.
        </p>
      </div>
    </section>
  )
}

const missionStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg)', padding: '96px 64px' },
  inner: { maxWidth: 820, margin: '0 auto', textAlign: 'center' },
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500, marginBottom: 18,
    fontFamily: 'var(--tm-sans)',
  },
  h2: {
    fontFamily: 'var(--tm-serif)', fontSize: 52, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.15,
    letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  lead: {
    fontFamily: 'var(--tm-sans)', fontWeight: 400,
    fontSize: 20, lineHeight: 1.55, color: 'var(--tm-text)',
    marginTop: 32,
  },
  body: {
    fontFamily: 'var(--tm-sans)', fontWeight: 300,
    fontSize: 17, lineHeight: 1.7, color: 'var(--tm-text-2)',
    marginTop: 18,
  },
}
