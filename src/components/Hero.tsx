import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Icon from './Icon'
import HeroWidget from './HeroWidget'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function Hero() {
  const root = useRef<HTMLDivElement>(null)
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  useGSAP(
    () => {
      // Honour reduced-motion: leave everything in its natural (visible) state.
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      // fromTo (not from) with clearProps so the elements always settle at their
      // natural CSS state — even if React 19 StrictMode interrupts the first mount,
      // they can never get stranded at opacity:0.
      const reveal = (
        target: string,
        vars: { y?: number; scale?: number; duration: number; delay?: number; stagger?: number; ease: string },
      ) =>
        gsap.fromTo(
          target,
          { opacity: 0, y: vars.y ?? 0, scale: vars.scale ?? 1 },
          { ...vars, opacity: 1, y: 0, scale: 1, clearProps: 'opacity,transform' },
        )

      reveal('.hero-pill', { y: 14, duration: 0.7, ease: 'power2.out' })
      reveal('.hero-title', { y: 24, duration: 0.9, delay: 0.1, ease: 'power3.out' })
      reveal('.hero-lede', { y: 18, duration: 0.8, delay: 0.25, ease: 'power2.out' })
      reveal('.hero-cta > *', { y: 14, duration: 0.7, delay: 0.4, stagger: 0.08, ease: 'power2.out' })
      reveal('.hero-tag', { y: 8, duration: 0.6, delay: 0.55, stagger: 0.06, ease: 'power2.out' })
      reveal('.hero-widget', { y: 30, scale: 0.98, duration: 1.0, delay: 0.2, ease: 'power3.out' })
    },
    { scope: root },
  )

  const section: CSSProperties = {
    ...heroStyles.section,
    padding: mobile ? `40px ${padX}px 56px` : narrow ? `48px ${padX}px 72px` : '48px 64px 72px',
  }
  const inner: CSSProperties = {
    ...heroStyles.inner,
    flexDirection: narrow ? 'column' : 'row',
    gap: mobile ? 32 : narrow ? 40 : 56,
    alignItems: narrow ? 'stretch' : 'center',
  }
  const right: CSSProperties = {
    ...heroStyles.right,
    justifyContent: narrow ? 'center' : 'flex-end',
  }
  const h1: CSSProperties = { ...heroStyles.h1, fontSize: mobile ? 34 : narrow ? 46 : 60 }

  return (
    <section ref={root} id="top" style={section} data-screen-label="01 Hero">
      <div style={inner}>
        <div style={heroStyles.left}>
          <div className="hero-pill" style={heroStyles.partnerRow}>
            <span style={heroStyles.partnerDot} />
            <span style={heroStyles.partnerText}>
              Utah Foster Care has proudly partnered with
              <strong style={heroStyles.partnerStrong}> Terrace Metrics</strong>
            </span>
          </div>
          <h1 className="hero-title" style={h1}>
            Resilience <span style={heroStyles.accent}>For You.</span><br />
            Strengthen What Matters.
          </h1>
          <p className="hero-lede" style={heroStyles.lead}>
            A simple, science-backed check-in for Utah foster families. Take a moment to
            pause, reflect, and notice what you've been carrying — no judgment, no diagnosis.
          </p>
          <div className="hero-cta" style={heroStyles.ctas}>
            <a className="tm-cta" style={heroStyles.primary} href="https://resiliencyforyou.com/wellness/signup/ufc">Start your free resiliency journey →</a>
            <button
              className="tm-cta"
              style={heroStyles.secondary}
              onClick={() => document.getElementById('about')?.scrollIntoView()}
            >
              Watch a brief intro
            </button>
          </div>
          <div style={heroStyles.trust}>
            {[
              { t: 'Free for Utah foster families', i: 'shield' },
              { t: 'Ages 8+ & adults', i: 'family' },
              { t: '10-minute check-in', i: 'wind' },
            ].map((t) => (
              <span key={t.t} className="hero-tag" style={heroStyles.chip}>
                <Icon name={t.i} size={14} color="var(--tm-purple)" />
                {t.t}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-widget" style={right}>
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
    display: 'inline-block', textDecoration: 'none',
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
