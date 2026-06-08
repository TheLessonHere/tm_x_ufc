import type { CSSProperties } from 'react'
import Icon from './Icon'

export default function HeroWidget() {
  return (
    <div style={hwStyles.surface}>
      <div style={hwStyles.head}>
        <div>
          <div style={hwStyles.eyebrow}>YOUR CHECK-IN</div>
          <div style={hwStyles.title}>Family Resilience Profile</div>
        </div>
        <span style={hwStyles.dateChip}>Updated today</span>
      </div>

      <div style={hwStyles.row}>
        {[
          { v: 78, l: 'Caregiver Wellbeing', b: 'STRONG', c: '#7adb8a', bg: '#1e3d2a' },
          { v: 82, l: 'Family Resilience', b: 'SATISFACTORY', c: '#7adb8a', bg: '#1e3d2a' },
          { v: 54, l: 'Stress Load', b: 'ELEVATED', c: '#e8a020', bg: '#3a2a10' },
        ].map((t, i) => (
          <div key={i} style={hwStyles.tile}>
            <div style={{ ...hwStyles.score, color: t.c }}>{t.v}</div>
            <div style={hwStyles.lab}>{t.l}</div>
            <span style={{ ...hwStyles.badge, background: t.bg, color: t.c }}>{t.b}</span>
          </div>
        ))}
      </div>

      <div style={hwStyles.section}>
        <div style={hwStyles.micro}>YOUR RESILIENCE CONTINUUM</div>
        <div style={hwStyles.bar}>
          <div style={hwStyles.dot} />
        </div>
        <div style={hwStyles.spectrumLabels}>
          <span>May need assistance</span>
          <span>Slight concern</span>
          <span>Satisfactory</span>
          <span>Optimal</span>
        </div>
      </div>

      <div style={hwStyles.viewLink}>
        <Icon name="plus" size={16} color="#7adb8a" />
        <span>Lorem ipsum dolor sit amet</span>
      </div>

      <div style={{ ...hwStyles.micro, marginTop: 22 }}>FOCUS AREAS</div>
      <div style={hwStyles.focus}>
        {[
          { l: 'Stress', v: 54, b: 'PRIORITY', c: '#e8a020', bg: '#3a2a10', dot: '#e8a020' },
          { l: 'Grit', v: 81, b: 'STRENGTH', c: '#7adb8a', bg: '#1e3d2a', dot: '#7adb8a' },
          { l: 'Social Support', v: 74, b: 'EXPLORE', c: '#7aafcc', bg: '#162433', dot: '#7aafcc' },
        ].map((r, i) => (
          <div key={i} style={hwStyles.focusRow}>
            <span style={{ ...hwStyles.focusDot, background: r.dot }} />
            <span style={hwStyles.focusLabel}>{r.l}</span>
            <span style={{ ...hwStyles.focusVal, color: r.c }}>{r.v}</span>
            <span style={{ ...hwStyles.badge, background: r.bg, color: r.c, fontSize: 9 }}>{r.b}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const hwStyles: Record<string, CSSProperties> = {
  surface: {
    background: 'var(--tm-dark-surface)', borderRadius: 20, padding: 28,
    fontFamily: 'var(--tm-sans)',
    width: 460, boxShadow: '0 18px 50px rgba(0,0,0,0.12)',
  },
  head: {
    display: 'flex', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: 22,
  },
  eyebrow: {
    fontSize: 10, color: 'rgba(255,255,255,0.45)',
    letterSpacing: '1px', textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'var(--tm-serif)', color: '#fff',
    fontSize: 20, marginTop: 4,
  },
  dateChip: {
    fontSize: 11, color: 'rgba(255,255,255,0.5)',
    border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: 999,
    padding: '4px 10px',
  },
  row: { display: 'flex', gap: 14 },
  tile: {
    flex: 1, background: 'rgba(255,255,255,0.03)',
    border: '0.5px solid rgba(255,255,255,0.06)',
    borderRadius: 12, padding: '12px 14px',
  },
  score: { fontFamily: 'var(--tm-serif)', fontSize: 36, lineHeight: 1 },
  lab: { fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 6 },
  badge: {
    display: 'inline-block', marginTop: 8, padding: '3px 10px',
    borderRadius: 999, fontSize: 9, fontWeight: 500,
    textTransform: 'uppercase', letterSpacing: '0.5px',
  },
  section: { marginTop: 22 },
  micro: {
    fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.5px',
    color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginBottom: 10,
  },
  bar: {
    height: 6, borderRadius: 999, position: 'relative',
    background: 'linear-gradient(90deg,#c0392b 0%,#e67e22 25%,#c8c820 50%,#27ae60 75%,#1a7a42 100%)',
  },
  dot: {
    position: 'absolute', top: -3, left: '62%', width: 12, height: 12,
    borderRadius: '50%', background: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
  spectrumLabels: {
    display: 'flex', justifyContent: 'space-between',
    marginTop: 10, fontSize: 9, color: 'rgba(255,255,255,0.35)',
  },
  viewLink: {
    marginTop: 18, display: 'flex', alignItems: 'center', gap: 6,
    color: 'rgba(255,255,255,0.85)', fontSize: 13, cursor: 'pointer',
  },
  focus: { display: 'flex', flexDirection: 'column', gap: 12, marginTop: 10 },
  focusRow: { display: 'flex', alignItems: 'center', gap: 12 },
  focusDot: { width: 8, height: 8, borderRadius: '50%' },
  focusLabel: { flex: 1, color: 'rgba(255,255,255,0.85)', fontSize: 14 },
  focusVal: { fontFamily: 'var(--tm-serif)', fontSize: 18 },
}
