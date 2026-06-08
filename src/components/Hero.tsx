import type { CSSProperties } from 'react'
import Icon from './Icon'
import HeroWidget from './HeroWidget'

export default function Hero() {
  return (
    <section style={heroStyles.section} data-screen-label="01 Hero">
      <div style={heroStyles.inner}>
        <div style={heroStyles.left}>
          <div style={heroStyles.partnerRow}>
            <span style={heroStyles.partnerDot} />
            <span style={heroStyles.partnerText}>
              Utah Foster Care has proudly partnered with
              <strong style={heroStyles.partnerStrong}> Terrace Metrics</strong>
            </span>
          </div>
          <h1 style={heroStyles.h1}>
            Resilience <span style={heroStyles.accent}>For You.</span><br />
            Strengthen What Matters.
          </h1>
          <p style={heroStyles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A science-backed
            check-in for Utah foster families — sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div style={heroStyles.ctas}>
            <button style={heroStyles.primary}>Start your free resiliency journey →</button>
            <button style={heroStyles.secondary}>Watch a brief intro</button>
          </div>
          <div style={heroStyles.trust}>
            {[
              { t: 'Free for Utah foster families', i: 'shield' },
              { t: 'Ages 8+ & adults', i: 'family' },
              { t: '10-minute check-in', i: 'wind' },
            ].map((t) => (
              <span key={t.t} style={heroStyles.chip}>
                <Icon name={t.i} size={14} color="var(--tm-purple)" />
                {t.t}
              </span>
            ))}
          </div>
        </div>
        <div style={heroStyles.right}>
          <HeroWidget />
        </div>
      </div>
    </section>
  )
}

const heroStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg)', padding: '64px 64px 96px' },
  inner: { maxWidth: 1280, margin: '0 auto', display: 'flex', gap: 56, alignItems: 'center' },
  left: { flex: 1.05 },
  right: { flex: 1, display: 'flex', justifyContent: 'flex-end' },
  partnerRow: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)',
    borderRadius: 999, padding: '8px 16px 8px 14px',
    marginBottom: 28,
  },
  partnerDot: {
    width: 6, height: 6, borderRadius: '50%',
    background: 'var(--tm-green)',
  },
  partnerText: {
    fontSize: 12.5, color: 'var(--tm-text)',
    fontFamily: 'var(--tm-sans)', fontWeight: 400,
  },
  partnerStrong: { fontWeight: 500 },
  partnerMute: { color: 'var(--tm-text-3)' },
  h1: {
    fontFamily: 'var(--tm-serif)', fontSize: 60, fontWeight: 400,
    lineHeight: 1.08, color: 'var(--tm-ink)', margin: 0,
    letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  lead: {
    fontFamily: 'var(--tm-sans)', fontWeight: 300,
    fontSize: 18, lineHeight: 1.6, color: 'var(--tm-text-2)',
    marginTop: 24, maxWidth: 500,
  },
  ctas: { display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' },
  primary: {
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '15px 28px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  secondary: {
    background: 'transparent', color: 'var(--tm-ink)',
    border: '0.5px solid rgba(0,0,0,0.2)',
    borderRadius: 999, padding: '15px 28px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  trust: { display: 'flex', gap: 10, marginTop: 32, flexWrap: 'wrap' },
  chip: {
    background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)',
    borderRadius: 999, padding: '8px 14px',
    fontSize: 13, color: 'var(--tm-ink)',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontFamily: 'var(--tm-sans)',
  },
}
