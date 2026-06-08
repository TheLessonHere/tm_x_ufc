import type { CSSProperties } from 'react'
import Icon from './Icon'

export default function VideoIntro() {
  return (
    <section style={videoStyles.section} data-screen-label="06 Video Intro">
      <div style={videoStyles.inner}>
        <div style={videoStyles.card}>
          <div style={videoStyles.left}>
            <div style={videoStyles.eyebrow}>BRIEF INTRODUCTION · 2 MIN</div>
            <h3 style={videoStyles.h3}>
              See how it works<br />
              in <span style={videoStyles.accent}>two minutes.</span>
            </h3>
            <p style={videoStyles.body}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit — a quick walk
              through what to expect, how your responses are used, and how the
              continuum works.
            </p>
            <button style={videoStyles.cta}>
              <Icon name="play" size={14} color="#fff" />
              Watch the introduction
            </button>
          </div>
          <button style={videoStyles.player} aria-label="Play introduction video">
            <img
              src="/assets/photos/family-coloring.jpg"
              alt="A parent and two children spending time together"
              style={videoStyles.poster}
            />
            <div style={videoStyles.posterTint} />
            <div style={videoStyles.playerInner}>
              <div style={videoStyles.playRing}>
                <div style={videoStyles.playGlyph}>
                  <Icon name="play" size={20} color="#fff" />
                </div>
              </div>
              <div style={videoStyles.playerCaption}>Introduction · 1:48</div>
            </div>
            <div style={videoStyles.scanLines} />
          </button>
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
    borderRadius: 14, border: 'none', cursor: 'pointer',
    overflow: 'hidden',
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
  poster: {
    position: 'absolute', inset: 0,
    width: '100%', height: '100%',
    objectFit: 'cover', display: 'block',
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
