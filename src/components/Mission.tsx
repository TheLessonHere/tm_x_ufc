import type { CSSProperties } from 'react'

export default function Mission() {
  return (
    <section style={missionStyles.section} data-screen-label="02 Mission">
      <div style={missionStyles.inner}>
        <div style={missionStyles.eyebrow}>OUR PROMISE TO YOU</div>
        <h2 style={missionStyles.h2}>
          Caring for others starts with<br />
          taking care of <span style={missionStyles.accent}>you.</span>
        </h2>
        <p style={missionStyles.lead}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua — foster parenting is
          incredibly rewarding, but it can also be hard at times.
        </p>
        <p style={missionStyles.body}>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <p style={missionStyles.body}>
          Excepteur sint occaecat cupidatat non proident — not to fix you or test you,
          but simply to give you a moment to pause, reflect, and take care of yourself.
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
