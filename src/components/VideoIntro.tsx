import { useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section: CSSProperties = {
    ...videoStyles.section,
    padding: mobile ? `0 ${padX}px 64px` : narrow ? `0 ${padX}px 72px` : '0 64px 96px',
  }
  const card: CSSProperties = {
    ...videoStyles.card,
    gridTemplateColumns: narrow ? '1fr' : '1fr 1.1fr',
    gap: mobile ? 28 : 48,
    padding: mobile ? 24 : narrow ? 36 : 48,
  }
  const h3: CSSProperties = { ...videoStyles.h3, fontSize: mobile ? 28 : 36 }

  const play = () => {
    const video = videoRef.current
    if (!video) return
    setPlaying(true)
    void video.play()
  }

  return (
    <section id="about" style={section} data-screen-label="06 Video Intro">
      <div style={videoStyles.inner}>
        <div style={card} data-reveal>
          <div style={videoStyles.left}>
            <div style={videoStyles.eyebrow}>BRIEF INTRODUCTION · 2 MIN</div>
            <h3 style={h3}>
              See how it works<br />
              in <span style={videoStyles.accent}>two minutes.</span>
            </h3>
            <p style={videoStyles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit — a quick walk
              through what to expect, how your responses are used, and how the
              continuum works.
            </p>
            <button className="tm-cta" style={videoStyles.cta} onClick={play}>
              <Icon name="play" size={14} color="#fff" />
              Watch the introduction
            </button>
          </div>
          <div style={videoStyles.player}>
            <video
              ref={videoRef}
              style={videoStyles.video}
              src="/assets/video/intro.mp4"
              poster="/assets/photos/family-coloring.jpg"
              controls={playing}
              preload="metadata"
              playsInline
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button style={videoStyles.overlay} onClick={play} aria-label="Play introduction video">
                <div style={videoStyles.posterTint} />
                <div style={videoStyles.playerInner}>
                  <div style={videoStyles.playRing}>
                    <div style={videoStyles.playGlyph}>
                      <Icon name="play" size={20} color="#fff" />
                    </div>
                  </div>
                  <div style={videoStyles.playerCaption}>Introduction · 2:20</div>
                </div>
                <div style={videoStyles.scanLines} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const videoStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg)', padding: '0 64px 96px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  card: {
    background: '#fff', borderRadius: 20, padding: 48,
    border: '0.5px solid rgba(0,0,0,0.06)',
    boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
    display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48,
    alignItems: 'center',
  },
  left: { fontFamily: 'var(--tm-sans)' },
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-purple)', fontWeight: 500, marginBottom: 14,
  },
  h3: {
    fontFamily: 'var(--tm-serif)', fontSize: 36, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.2,
    letterSpacing: '-0.005em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-purple)' },
  body: {
    fontSize: 16, fontWeight: 300, lineHeight: 1.6,
    color: 'var(--tm-text-2)', marginTop: 18,
  },
  cta: {
    marginTop: 28,
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '13px 22px',
    fontSize: 14, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
    display: 'inline-flex', alignItems: 'center', gap: 10,
  },
  player: {
    position: 'relative',
    aspectRatio: '16 / 10',
    background: 'linear-gradient(135deg, #3a1f47 0%, #2a1133 100%)',
    borderRadius: 14,
    overflow: 'hidden',
  },
  video: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
  },
  overlay: {
    position: 'absolute', inset: 0,
    border: 'none', background: 'transparent', cursor: 'pointer',
    padding: 0,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  playerInner: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: 12, position: 'relative', zIndex: 1,
  },
  playRing: {
    width: 84, height: 84, borderRadius: '50%',
    background: 'rgba(255,255,255,0.08)',
    border: '0.5px solid rgba(255,255,255,0.18)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  playGlyph: {
    width: 56, height: 56, borderRadius: '50%',
    background: 'var(--tm-green)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    paddingLeft: 4,
  },
  posterTint: {
    position: 'absolute', inset: 0,
    background: 'rgba(42,17,51,0.5)',
  },
  playerCaption: {
    fontSize: 13, color: 'rgba(255,255,255,0.85)',
    fontFamily: 'var(--tm-sans)', marginTop: 6,
  },
  scanLines: {
    position: 'absolute', inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)',
    pointerEvents: 'none',
  },
}
