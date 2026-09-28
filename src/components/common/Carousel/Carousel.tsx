import { Children, useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Carousel.module.scss'

interface CarouselProps {
  children: ReactNode[]
  ariaLabel?: string
}

export function Carousel({ children, ariaLabel }: CarouselProps) {
  const items = Children.toArray(children)
  const trackRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let raf = 0

    const updateActive = () => {
      const trackRect = track.getBoundingClientRect()
      const center = trackRect.left + trackRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      slideRefs.current.forEach((slide, index) => {
        if (!slide) return
        const rect = slide.getBoundingClientRect()
        const slideCenter = rect.left + rect.width / 2
        const distance = Math.abs(slideCenter - center)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActive(closestIndex)
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateActive)
    }

    updateActive()
    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [items.length])

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, index))
    const slide = slideRefs.current[clamped]
    const track = trackRef.current
    if (!slide || !track) return

    const trackRect = track.getBoundingClientRect()
    const slideRect = slide.getBoundingClientRect()
    const offset = slide.offsetLeft - (trackRect.width - slideRect.width) / 2

    track.scrollTo({ left: offset, behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel} aria-label={ariaLabel} role="group">
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => scrollToIndex(active - 1)}
        disabled={active === 0}
        aria-label="Предыдущая карточка"
      >
        ‹
      </button>

      <div className={styles.track} ref={trackRef}>
        {items.map((child, index) => (
          <div
            key={index}
            ref={(el) => {
              slideRefs.current[index] = el
            }}
            className={`${styles.slide} ${index === active ? styles.active : ''}`}
            onClick={() => scrollToIndex(index)}
          >
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => scrollToIndex(active + 1)}
        disabled={active === items.length - 1}
        aria-label="Следующая карточка"
      >
        ›
      </button>
    </div>
  )
}