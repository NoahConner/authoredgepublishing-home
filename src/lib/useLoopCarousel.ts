import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Infinite autoplay carousel, matching the original Owl Carousel settings:
 * advances one item every `interval` ms with a 0.35s slide, loops seamlessly
 * and pauses while hovered or focused.
 *
 * Render the item list twice (`[...items, ...items]`) inside the element that
 * gets `trackRef`; the hook slides it with a transform. Each item must be the
 * same width; the step is measured from the first two children.
 */
export function useLoopCarousel(count: number, interval = 2000) {
  const trackRef = useRef<HTMLUListElement>(null)
  const [index, setIndex] = useState(0)
  const [animate, setAnimate] = useState(true)
  const [paused, setPaused] = useState(false)
  const [step, setStep] = useState(0)

  // Measure the distance between two items (item width + gap)
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const measure = () => {
      const [a, b] = track.children as unknown as HTMLElement[]
      if (a && b) setStep(b.offsetLeft - a.offsetLeft)
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(track)
    return () => ro.disconnect()
  }, [])

  const go = useCallback(
    (delta: 1 | -1) => {
      setAnimate(true)
      setIndex((i) => {
        // Going back from the first item: jump (without animating) to the
        // same item in the second copy, then slide back one
        if (delta === -1 && i === 0) {
          setAnimate(false)
          requestAnimationFrame(() =>
            requestAnimationFrame(() => {
              setAnimate(true)
              setIndex(count - 1)
            }),
          )
          return count
        }
        // Safety net: if a snap-back was missed (no transitionend), wrap around
        return (i >= count ? i - count : i) + delta
      })
    },
    [count],
  )

  // Autoplay (off when the user prefers reduced motion)
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Skip ticks while the browser tab is in the background (transitions don't run there)
    const id = window.setInterval(() => !document.hidden && go(1), interval)
    return () => window.clearInterval(id)
  }, [go, interval, paused])

  // After sliding into the second copy, snap back to the first (invisible jump)
  const onTransitionEnd = () => {
    if (index >= count) {
      setAnimate(false)
      setIndex(index - count)
    }
  }

  const trackStyle = {
    transform: `translateX(${-index * step}px)`,
    transition: animate ? 'transform 0.35s ease' : 'none',
  }

  const pauseProps = {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  }

  return { trackRef, trackStyle, onTransitionEnd, pauseProps, next: () => go(1), prev: () => go(-1) }
}
