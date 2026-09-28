import { useEffect, useRef, useState, type ReactNode } from 'react'
import styles from './Reveal.module.scss'

type RevealDirection = 'left' | 'right' | 'up'

interface RevealProps {
  children: ReactNode
  direction?: RevealDirection
  delay?: number
  className?: string
}

export function Reveal({ children, direction = 'left', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [play, setPlay] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={[styles.reveal, styles[direction], play && styles.play, className]
        .filter(Boolean)
        .join(' ')}
      style={{ animationDelay: play ? `${delay}ms` : undefined }}
    >
      {children}
    </div>
  )
}