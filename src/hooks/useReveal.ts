import { useEffect } from 'react'

/**
 * Lightweight intersection-observer reveal. Adds `is-revealed` to any element
 * with `data-reveal` (or `data-reveal-stagger`) once it scrolls into view, so
 * the CSS in styles/animations.css can fade/rise it in.
 *
 * A MutationObserver re-scans for elements added after mount, so lazily
 * rendered content still gets observed.
 */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-revealed')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 },
    )

    const observeAll = () => {
      document
        .querySelectorAll<HTMLElement>('[data-reveal]:not(.is-revealed), [data-reveal-stagger]:not(.is-revealed)')
        .forEach((el) => io.observe(el))
    }

    observeAll()

    const mo = new MutationObserver(() => observeAll())
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
