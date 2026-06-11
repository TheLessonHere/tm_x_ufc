import type { CSSProperties } from 'react'
import Icon from './Icon'
import { useBreakpoint } from '../hooks/useBreakpoint'

export default function YourPath() {
  const bp = useBreakpoint()
  const mobile = bp === 'mobile'
  const narrow = bp !== 'desktop'
  const padX = mobile ? 22 : narrow ? 40 : 64

  const section: CSSProperties = {
    ...pathStyles.section,
    padding: `${mobile ? 64 : narrow ? 80 : 120}px ${padX}px`,
  }
  const head: CSSProperties = { ...pathStyles.head, marginBottom: mobile ? 48 : 80 }
  const h2: CSSProperties = { ...pathStyles.h2, fontSize: mobile ? 30 : narrow ? 38 : 50 }
  const rail: CSSProperties = { ...pathStyles.rail, gap: mobile ? 56 : narrow ? 72 : 96 }
  const stepT: CSSProperties = { ...pathStyles.stepT, fontSize: mobile ? 27 : 36 }
  const ctaWrap: CSSProperties = { ...pathStyles.ctaWrap, marginTop: mobile ? 56 : 96 }

  const steps = [
    {
      n: '01',
      t: 'Create your free account',
      d: 'Lorem ipsum dolor sit amet — choose the license that fits your household. Foster parents, partner, and children ages 8+.',
      mock: 'license-select',
      bullets: ['Free for Utah foster families', 'Choose adult, child, or whole-family', 'Takes under a minute'],
    },
    {
      n: '02',
      t: 'Invite your family',
      d: 'Sed do eiusmod tempor incididunt — add your partner and children so each person has their own private check-in.',
      mock: 'invite',
      bullets: ['Private profiles for each member', 'Optional shared dashboard', 'Add and remove anytime'],
    },
    {
      n: '03',
      t: 'Access self-paced resources',
      d: 'Duis aute irure dolor in reprehenderit — recommendations tied to your actual profile, with Utah Foster Care support standing alongside.',
      mock: 'resources',
      bullets: ['Curated to your profile', 'Self-paced curricula', 'Workshops & coaching when you want it'],
    },
    {
      n: '04',
      t: 'Track progress together',
      d: 'Excepteur sint occaecat cupidatat non proident — retake the check-in every six to eight weeks and watch the continuum move.',
      mock: 'track',
      bullets: ['Re-check every 6–8 weeks', 'See trends over time', 'Adjust focus as life shifts'],
    },
  ]
  return (
    <section id="path" style={section} data-screen-label="07 Your Path">
      <div style={pathStyles.inner}>
        <div style={head} data-reveal>
          <div style={pathStyles.eyebrow}>HOW IT WORKS</div>
          <h2 style={h2}>
            Your path to stronger resilience<br />
            <span style={pathStyles.accent}>starts here.</span>
          </h2>
          <p style={pathStyles.sub}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit — four steps,
            no pressure.
          </p>
        </div>

        <div style={rail}>
          {steps.map((s, i) => {
            const flip = i % 2 === 1
            return (
              <div key={s.n} style={{
                ...pathStyles.row,
                gridTemplateColumns: narrow ? '1fr' : flip ? '1.1fr 1fr' : '1fr 1.1fr',
                gap: mobile ? 28 : narrow ? 40 : 64,
              }} data-reveal>
                <div style={{
                  ...pathStyles.copy,
                  order: narrow ? 2 : flip ? 2 : 1,
                }}>
                  <div style={pathStyles.numRow}>
                    <span style={pathStyles.num}>{s.n}</span>
                    <span style={pathStyles.numLine} />
                  </div>
                  <h3 style={stepT}>{s.t}</h3>
                  <p style={pathStyles.stepD}>{s.d}</p>
                  <ul style={pathStyles.list}>
                    {s.bullets.map((b) => (
                      <li key={b} style={pathStyles.li}>
                        <Icon name="check" size={12} color="var(--tm-green)" strokeWidth={2.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  ...pathStyles.shot,
                  order: narrow ? 1 : flip ? 1 : 2,
                }}>
                  <MockScreen kind={s.mock} />
                </div>
              </div>
            )
          })}
        </div>

        <div style={ctaWrap}>
          <button className="tm-cta" style={pathStyles.cta}>Start your free resiliency journey →</button>
          <div style={pathStyles.reassure}>No subscription · Cancel anytime · Your data is private</div>
        </div>
      </div>
    </section>
  )
}

function MockScreen({ kind }: { kind: string }) {
  if (kind === 'license-select') {
    return (
      <div style={mockStyles.frame}>
        <MockChrome title="Create your account" />
        <div style={mockStyles.body}>
          <div style={mockStyles.smallEyebrow}>STEP 1 OF 3</div>
          <div style={mockStyles.bodyTitle}>Choose your license</div>
          <div style={mockStyles.licenseGrid}>
            {[
              { i: 'user', t: 'Adult', d: 'Just me' },
              { i: 'smile', t: 'Child', d: 'Ages 8–17', sel: true },
              { i: 'family', t: 'Family', d: 'Whole household' },
            ].map((o) => (
              <div key={o.t} style={{
                ...mockStyles.licenseCard,
                border: o.sel ? '2px solid var(--tm-green)' : '0.5px solid rgba(0,0,0,0.12)',
                background: o.sel ? 'var(--tm-green-light)' : '#fff',
              }}>
                <Icon name={o.i} size={22} color="var(--tm-green)" />
                <div style={mockStyles.licenseT}>{o.t}</div>
                <div style={mockStyles.licenseD}>{o.d}</div>
              </div>
            ))}
          </div>
          <div style={mockStyles.btnRow}>
            <div style={mockStyles.btnGhost}>Back</div>
            <div style={mockStyles.btnGreen}>Continue →</div>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'invite') {
    return (
      <div style={mockStyles.frame}>
        <MockChrome title="Invite your family" />
        <div style={mockStyles.body}>
          <div style={mockStyles.smallEyebrow}>YOUR HOUSEHOLD</div>
          <div style={mockStyles.bodyTitle}>Add the people you care for</div>
          <div style={mockStyles.peopleList}>
            {[
              { i: 'user', t: 'You', d: 'Account owner', chip: 'OWNER', c: 'var(--tm-green)' },
              { i: 'user', t: 'Partner', d: 'partner@email.com', chip: 'INVITED', c: 'var(--tm-info)' },
              { i: 'smile', t: 'Maya, 11', d: 'Child profile', chip: 'ACTIVE', c: 'var(--tm-green)' },
              { i: 'smile', t: 'Theo, 9', d: 'Pending setup', chip: 'PENDING', c: 'rgba(26,31,28,0.4)' },
            ].map((p) => (
              <div key={p.t} style={mockStyles.personRow}>
                <div style={mockStyles.avatar}>
                  <Icon name={p.i} size={16} color="var(--tm-green)" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={mockStyles.personT}>{p.t}</div>
                  <div style={mockStyles.personD}>{p.d}</div>
                </div>
                <span style={{ ...mockStyles.chip, color: p.c, borderColor: 'rgba(0,0,0,0.08)' }}>{p.chip}</span>
              </div>
            ))}
          </div>
          <div style={mockStyles.addLink}>
            <Icon name="plus" size={14} color="var(--tm-green)" />
            <span>Add another family member</span>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'resources') {
    return (
      <div style={mockStyles.frame}>
        <MockChrome title="Recommended for you" />
        <div style={mockStyles.body}>
          <div style={mockStyles.smallEyebrow}>BASED ON YOUR CHECK-IN</div>
          <div style={mockStyles.bodyTitle}>Tools that fit where you are</div>
          <div style={mockStyles.resGrid}>
            {[
              { i: 'book', t: 'Stress in the moment', d: '5-min guided practice', tag: 'PRIORITY', tc: '#b56619' },
              { i: 'users', t: 'When the home feels loud', d: 'Workshop · UFC partner', tag: 'WORKSHOP', tc: 'var(--tm-green)' },
              { i: 'sparkles', t: 'Naming what you feel', d: 'For kids ages 8–12', tag: 'CHILD', tc: 'var(--tm-info)' },
              { i: 'shield', t: 'Boundaries that hold', d: 'Self-paced · 3 chapters', tag: 'EXPLORE', tc: 'var(--tm-info)' },
            ].map((r) => (
              <div key={r.t} style={mockStyles.resCard}>
                <div style={mockStyles.resIconTile}>
                  <Icon name={r.i} size={16} color="var(--tm-green)" />
                </div>
                <div style={mockStyles.resT}>{r.t}</div>
                <div style={mockStyles.resD}>{r.d}</div>
                <span style={{ ...mockStyles.resTag, color: r.tc, borderColor: r.tc + '33' }}>{r.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'track') {
    return (
      <div style={mockStyles.frame}>
        <MockChrome title="Progress over time" />
        <div style={mockStyles.body}>
          <div style={mockStyles.smallEyebrow}>LAST 6 MONTHS</div>
          <div style={mockStyles.bodyTitle}>Your resilience continuum</div>
          <div style={mockStyles.chart}>
            <svg viewBox="0 0 320 140" width="100%" height="140" style={{ display: 'block' }}>
              <defs>
                <linearGradient id="trendFill" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4a7c59" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#4a7c59" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[20, 50, 80, 110].map((y) => (
                <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(0,0,0,0.06)" strokeWidth="0.5" />
              ))}
              <path d="M0 100 L40 88 L80 92 L120 70 L160 65 L200 50 L240 42 L280 36 L320 30"
                fill="none" stroke="var(--tm-green)" strokeWidth="2" strokeLinecap="round" />
              <path d="M0 100 L40 88 L80 92 L120 70 L160 65 L200 50 L240 42 L280 36 L320 30 L320 140 L0 140 Z"
                fill="url(#trendFill)" />
              {[[40, 88], [120, 70], [200, 50], [280, 36]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="3.5" fill="#fff" stroke="var(--tm-green)" strokeWidth="1.5" />
              ))}
            </svg>
            <div style={mockStyles.chartLabels}>
              <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
            </div>
          </div>
          <div style={mockStyles.deltaRow}>
            <div style={mockStyles.deltaTile}>
              <div style={mockStyles.deltaN}>+12</div>
              <div style={mockStyles.deltaL}>Wellbeing</div>
            </div>
            <div style={mockStyles.deltaTile}>
              <div style={mockStyles.deltaN}>+8</div>
              <div style={mockStyles.deltaL}>Grit</div>
            </div>
            <div style={mockStyles.deltaTile}>
              <div style={mockStyles.deltaN}>−6</div>
              <div style={mockStyles.deltaL}>Stress</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return null
}

function MockChrome({ title }: { title: string }) {
  return (
    <div style={mockStyles.chrome}>
      <div style={mockStyles.dots}>
        <span style={{ ...mockStyles.cdot, background: '#e2e2dc' }} />
        <span style={{ ...mockStyles.cdot, background: '#e2e2dc' }} />
        <span style={{ ...mockStyles.cdot, background: '#e2e2dc' }} />
      </div>
      <div style={mockStyles.chromeTitle}>{title}</div>
      <div style={{ width: 36 }} />
    </div>
  )
}

const pathStyles: Record<string, CSSProperties> = {
  section: { background: 'var(--tm-bg)', padding: '120px 64px' },
  inner: { maxWidth: 1200, margin: '0 auto' },
  head: { textAlign: 'center', marginBottom: 80 },
  eyebrow: {
    fontSize: 11, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-green)', fontWeight: 500, marginBottom: 18,
    fontFamily: 'var(--tm-sans)',
  },
  h2: {
    fontFamily: 'var(--tm-serif)', fontSize: 50, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.15,
    letterSpacing: '-0.01em',
  },
  accent: { fontStyle: 'italic', color: 'var(--tm-green)' },
  sub: {
    fontFamily: 'var(--tm-sans)', fontSize: 17, fontWeight: 300,
    color: 'var(--tm-text-2)', marginTop: 20,
  },
  rail: { display: 'flex', flexDirection: 'column', gap: 96 },
  row: {
    display: 'grid', gap: 64, alignItems: 'center',
  },
  copy: { fontFamily: 'var(--tm-sans)' },
  numRow: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 18 },
  num: {
    fontFamily: 'var(--tm-serif)', fontSize: 38,
    color: 'var(--tm-green)', lineHeight: 1,
  },
  numLine: {
    flex: 1, height: '0.5px',
    background: 'rgba(74,124,89,0.3)', maxWidth: 80,
  },
  stepT: {
    fontFamily: 'var(--tm-serif)', fontSize: 36, fontWeight: 400,
    color: 'var(--tm-ink)', margin: 0, lineHeight: 1.2,
    letterSpacing: '-0.005em',
  },
  stepD: {
    fontSize: 17, fontWeight: 300, lineHeight: 1.65,
    color: 'var(--tm-text-2)', marginTop: 14, maxWidth: 480,
  },
  list: { listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 10 },
  li: { display: 'flex', alignItems: 'center', gap: 10, fontSize: 14.5, color: 'var(--tm-text)' },
  shot: {},
  ctaWrap: { textAlign: 'center', marginTop: 96 },
  cta: {
    background: 'var(--tm-green)', color: '#fff', border: 'none',
    borderRadius: 999, padding: '16px 32px',
    fontSize: 15, fontWeight: 500, cursor: 'pointer',
    fontFamily: 'var(--tm-sans)',
  },
  reassure: {
    marginTop: 18, fontSize: 13, color: 'var(--tm-text-3)',
    fontFamily: 'var(--tm-sans)',
  },
}

const mockStyles: Record<string, CSSProperties> = {
  frame: {
    background: '#fff', borderRadius: 16,
    border: '0.5px solid rgba(0,0,0,0.08)',
    boxShadow: '0 14px 40px rgba(26,31,28,0.08)',
    overflow: 'hidden',
    fontFamily: 'var(--tm-sans)',
  },
  chrome: {
    height: 40, background: '#f7f5f0',
    borderBottom: '0.5px solid rgba(0,0,0,0.06)',
    display: 'flex', alignItems: 'center', padding: '0 14px',
  },
  dots: { display: 'flex', gap: 6, width: 36 },
  cdot: { width: 9, height: 9, borderRadius: '50%' },
  chromeTitle: {
    flex: 1, textAlign: 'center', fontSize: 12,
    color: 'var(--tm-text-3)', fontWeight: 500,
  },
  body: { padding: 28 },
  smallEyebrow: {
    fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase',
    color: 'var(--tm-green)', fontWeight: 500, marginBottom: 10,
  },
  bodyTitle: {
    fontFamily: 'var(--tm-serif)', fontSize: 20,
    color: 'var(--tm-ink)', marginBottom: 22,
  },
  licenseGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 },
  licenseCard: {
    borderRadius: 12, padding: '18px 14px',
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    gap: 8, textAlign: 'center',
  },
  licenseT: { fontSize: 14, fontWeight: 500, color: 'var(--tm-ink)' },
  licenseD: { fontSize: 11.5, color: 'var(--tm-text-3)' },
  btnRow: { display: 'flex', justifyContent: 'space-between', marginTop: 24 },
  btnGhost: {
    border: '0.5px solid rgba(0,0,0,0.15)', borderRadius: 999,
    padding: '8px 18px', fontSize: 13, color: 'var(--tm-text-2)',
  },
  btnGreen: {
    background: 'var(--tm-green)', color: '#fff', borderRadius: 999,
    padding: '8px 18px', fontSize: 13, fontWeight: 500,
  },
  peopleList: { display: 'flex', flexDirection: 'column', gap: 10 },
  personRow: {
    display: 'flex', alignItems: 'center', gap: 14,
    padding: '12px 14px',
    border: '0.5px solid rgba(0,0,0,0.06)',
    borderRadius: 12,
  },
  avatar: {
    width: 36, height: 36, borderRadius: '50%',
    background: 'var(--tm-green-light)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  personT: { fontSize: 14, fontWeight: 500, color: 'var(--tm-ink)' },
  personD: { fontSize: 12, color: 'var(--tm-text-3)' },
  chip: {
    fontSize: 9.5, letterSpacing: '0.5px', textTransform: 'uppercase',
    fontWeight: 500, padding: '3px 9px', borderRadius: 999,
    border: '0.5px solid',
  },
  addLink: {
    display: 'flex', alignItems: 'center', gap: 8,
    marginTop: 14, fontSize: 13, color: 'var(--tm-green)', fontWeight: 500,
  },
  resGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  resCard: {
    border: '0.5px solid rgba(0,0,0,0.06)', borderRadius: 12,
    padding: 14, position: 'relative',
  },
  resIconTile: {
    width: 32, height: 32, borderRadius: 8,
    background: 'var(--tm-green-light)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
  },
  resT: { fontSize: 13, fontWeight: 500, color: 'var(--tm-ink)' },
  resD: { fontSize: 11.5, color: 'var(--tm-text-3)', marginTop: 3 },
  resTag: {
    position: 'absolute', top: 12, right: 12,
    fontSize: 9, letterSpacing: '0.5px', textTransform: 'uppercase',
    fontWeight: 500, padding: '2px 7px', borderRadius: 999,
    border: '0.5px solid',
  },
  chart: {
    border: '0.5px solid rgba(0,0,0,0.06)', borderRadius: 12,
    padding: '16px 16px 10px',
  },
  chartLabels: {
    display: 'flex', justifyContent: 'space-between',
    fontSize: 10.5, color: 'var(--tm-text-3)', marginTop: 8,
  },
  deltaRow: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10, marginTop: 14 },
  deltaTile: {
    border: '0.5px solid rgba(0,0,0,0.06)', borderRadius: 10,
    padding: '12px 10px', textAlign: 'center',
  },
  deltaN: {
    fontFamily: 'var(--tm-serif)', fontSize: 24,
    color: 'var(--tm-green)', lineHeight: 1,
  },
  deltaL: { fontSize: 11, color: 'var(--tm-text-3)', marginTop: 6 },
}
