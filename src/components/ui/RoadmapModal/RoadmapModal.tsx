import { createPortal } from 'react-dom'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './RoadmapModal.module.scss'

type RoadmapModalProps = {
  open: boolean
  onClose: () => void
}

export function RoadmapModal({ open, onClose }: RoadmapModalProps) {
  const { t } = useLanguage()

  if (!open) return null

  const r = t.roadmap

  const groups = [
    { title: r.doneTitle, items: r.done, dot: styles.dotDone },
    { title: r.progressTitle, items: r.progress, dot: styles.dotProgress },
    { title: r.plannedTitle, items: r.planned, dot: styles.dotPlanned },
  ]

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label={t.common.close}>
          ×
        </button>

        <h2 className={styles.title}>{r.title}</h2>

        <p className={styles.description}>{r.description}</p>

        {groups.map((g) => (
          <div key={g.title} className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={`${styles.dot} ${g.dot}`} />
              <h3>{g.title}</h3>
            </div>

            <ul>
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        <p className={styles.footer}>{r.footer}</p>
      </div>
    </div>,
    document.body,
  )
}
