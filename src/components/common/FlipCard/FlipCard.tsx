import { useState, type ReactNode } from 'react'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './FlipCard.module.scss'

interface FlipCardProps {
  front: ReactNode
  back: ReactNode
  className?: string
}

export function FlipCard({ front, back, className = '' }: FlipCardProps) {
  const { t } = useLanguage()
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className={`${styles.scene} ${className}`}
      onClick={() => setFlipped((v) => !v)}
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={t.flip.aria}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setFlipped((v) => !v)
        }
      }}
    >
      <div className={`${styles.card} ${flipped ? styles.flipped : ''}`}>
        <div className={`${styles.face} ${styles.front}`}>{front}</div>
        <div className={`${styles.face} ${styles.back}`}>{back}</div>
      </div>

      <div className={styles.hint} aria-hidden="true">
        <span className={styles.hintIcon}>⟳</span>
        {flipped ? t.flip.back : t.flip.hint}
      </div>
    </div>
  )
}