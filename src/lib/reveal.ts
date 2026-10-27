// Scroll-reveal animations, matching the original theme (WPBakery "animate when
// almost visible" + Salient "grow-in").
//
// Mark an element with data-animate="fade" | "bounce" | "grow" (optional
// style --delay: 100ms). When its top reaches ~85% of the viewport height, we
// set data-revealed and the CSS in global.css plays the animation once.
// Elements already on screen at page load animate immediately.

// Kept at module level: an IntersectionObserver with no JS reference can be
// garbage-collected, which silently stops further reveals.
export function initReveal() {
  let observer: IntersectionObserver | undefined
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const elements = document.querySelectorAll<HTMLElement>('[data-animate]')
  // A [data-reveal-group] (e.g. a carousel) reveals all its animated children at
  // once when the group scrolls into view, even those still off to the side —
  // like the original theme, which only checks vertical position.
  const groups = document.querySelectorAll<HTMLElement>('[data-reveal-group]')
  const grouped = (el: HTMLElement) => el.parentElement?.closest('[data-reveal-group]') != null

  const finish = (el: HTMLElement) => {
    // Remove the animation hooks once played, so hover effects (e.g. button
    // opacity) aren't overridden by the animation's final keyframe.
    el.removeAttribute('data-animate')
    el.removeAttribute('data-revealed')
  }

  if (reduceMotion || !('IntersectionObserver' in window)) {
    elements.forEach(finish)
    return () => undefined
  }

  const reveal = (el: HTMLElement) => {
    el.setAttribute('data-revealed', '')
    const done = () => finish(el)
    el.addEventListener('animationend', done, { once: true })
    if (el.dataset.animate === 'grow') el.addEventListener('transitionend', done, { once: true })
  }

  observer = new IntersectionObserver(
    (entries, obs) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const el = entry.target as HTMLElement
        obs.unobserve(el)
        if (el.hasAttribute('data-reveal-group')) {
          el.querySelectorAll<HTMLElement>('[data-animate]').forEach(reveal)
        } else {
          reveal(el)
        }
      }
    },
    // Trigger when the element's top is 15% above the bottom of the viewport
    { rootMargin: '0px 0px -15% 0px' },
  )

  elements.forEach((el) => {
    if (!grouped(el)) observer!.observe(el)
  })
  groups.forEach((g) => observer!.observe(g))

  // React StrictMode can mount effects twice in development. Disconnect this
  // run's observer during cleanup so stale observers cannot act on the page.
  return () => observer?.disconnect()
}
