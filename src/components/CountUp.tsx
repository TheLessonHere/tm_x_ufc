import { useEffect, useRef, useState } from 'react'

type CountUpProps = {
  to: number
  /** Text shown before the number, e.g. "$". */
  prefix?: string
  /** Text shown after the number, e.g. "+", "%", "M+". */
  suffix?: string
  /** Animation length in ms. Defaults to the kit's count token (1700ms). */
  duration?: number
}

/**
 * Counts from 0 up to `to` once the element scrolls into view, using a
 * requestAnimationFrame ease-out. Honours prefers-reduced-motion by jumping
 * straight to the final value.
 */
export default function CountUp({ to, prefix = '', suffix = '', duration = 1700 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setValue(to)
      return
    }

    let raf = 0
    let started = false

    const run = () => {
      started = true
      const start = performance.now()
      const tick = (now: number) => {
        const k = Math.min(1, (now - start) / duration)
        const eased = 1 - Math.pow(1 - k, 3)
        setValue(Math.round(to * eased))
        if (k < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  )
}
