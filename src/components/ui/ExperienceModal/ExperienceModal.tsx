import { createPortal } from 'react-dom'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './ExperienceModal.module.scss'

type ExperienceType = 'gf-digital' | 'autorena' | 'aquaopt' | 'projects'

type Props = {
  open: boolean
  type: ExperienceType | null
  onClose: () => void
}

const technologies: Record<ExperienceType, string[]> = {
  'gf-digital': ['React', 'TanStack Router', 'TypeScript', 'Tailwind CSS', 'Git'],
  autorena: ['React', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'REST API', 'Docker', 'Git'],
  aquaopt: ['CS-Cart', 'PHP', 'MySQL', 'SQL', 'Redis', 'Git'],
  projects: ['React', 'Next.js', 'TypeScript', 'Prisma', 'React Query'],
}

export function ExperienceModal({ open, type, onClose }: Props) {
  const { t } = useLanguage()

  if (!open || !type) return null

  const m = t.experienceModal
  const item = m.items[type]

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label={t.common.close}>
          ×
        </button>

        <h2 className={styles.title}>{item.title}</h2>

        <p className={styles.role}>{item.role}</p>

        <div className={styles.block}>
          <h3>{m.about}</h3>
          <p>{item.about}</p>
        </div>

        <div className={styles.block}>
          <h3>{type === 'projects' ? m.projects : m.tasks}</h3>

          <ul className={styles.list}>
            {item.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3>{m.tech}</h3>

          <div className={styles.tags}>
            {technologies[type].map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
