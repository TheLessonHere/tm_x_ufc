import { useEffect, useState } from 'react'

/**
 * Responsive breakpoints for the landing page.
 *  - mobile:  <= 640px  (phones)
 *  - tablet:  641–1024px
 *  - desktop: > 1024px   (the original 1280px composition)
 *
 * The design uses inline styles, which can't carry CSS media queries, so each
 * component reads the current breakpoint from this hook and merges in overrides.
 */
export type Breakpoint = 'mobile' | 'tablet' | 'desktop'

const MOBILE_Q = '(max-width: 640px)'
const TABLET_Q = '(max-width: 1024px)'

function current(): Breakpoint {
  if (typeof window === 'undefined') return 'desktop'
  if (window.matchMedia(MOBILE_Q).matches) return 'mobile'
  if (window.matchMedia(TABLET_Q).matches) return 'tablet'
  return 'desktop'
}

export function useBreakpoint(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(current)

  useEffect(() => {
    const queries = [window.matchMedia(MOBILE_Q), window.matchMedia(TABLET_Q)]
    const handler = () => setBp(current())
    queries.forEach((q) => q.addEventListener('change', handler))
    return () => queries.forEach((q) => q.removeEventListener('change', handler))
  }, [])

  return bp
}
