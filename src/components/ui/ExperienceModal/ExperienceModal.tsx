import styles from './ExperienceModal.module.scss'

type ExperienceType =
  | 'autorena'
  | 'cscart'
  | 'projects'

type Props = {
  open: boolean
  type: ExperienceType | null
  onClose: () => void
}

const content = {
  autorena: {
    title: 'Autorena',
    role: 'Frontend Developer',

    about:
      'Разработка и развитие продуктового веб-приложения автомобильной тематики. Работа над пользовательским интерфейсом, интеграцией API и развитием существующего функционала.',

    tasks: [
      'Разработка интерфейсов на React и TypeScript',
      'Интеграция REST API',
      'Работа с Redux Toolkit и React Query',
      'Исправление ошибок и оптимизация компонентов',
      'Поддержка и развитие существующего функционала',
      'Работа с Docker и Git в команде',
    ],

    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'REST API',
      'Docker',
      'Git',
    ],
  },

  cscart: {
    title: 'CS-Cart',
    role: 'Frontend Developer',

    about:
      'Коммерческий интернет-магазин на платформе CS-Cart. Разработка нового функционала, поддержка существующего кода и доработка административной панели.',

    tasks: [
      'Разработка нового функционала магазина',
      'Работа с PHP и шаблонами Smarty',
      'Работа с SQL и профильными полями пользователей',
      'Исправление ошибок и поддержка проекта',
      'Доработка административной панели',
    ],

    technologies: [
      'CS-Cart',
      'PHP',
      'Smarty',
      'SQL',
      'Git',
    ],
  },

  projects: {
    title: 'Собственные проекты',
    role: 'Frontend Developer',

    about:
      'Постоянно развиваю практические навыки через собственные проекты, тестовые задания и изучение современных технологий.',

    tasks: [
      'Users Dashboard',
      'React Review Form',
      'API Debug Panel',
      'Portfolio Website',
      'LegiCheck (в разработке)',
    ],

    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'React Query',
      'REST API',
    ],
  },
}

export function ExperienceModal({
  open,
  type,
  onClose,
}: Props) {
  if (!open || !type) return null

  const item = content[type]

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.close}
          onClick={onClose}
        >
          ×
        </button>

        <h2 className={styles.title}>
          {item.title}
        </h2>

        <p className={styles.role}>
          {item.role}
        </p>

        <div className={styles.block}>
          <h3>О проекте</h3>

          <p>
            {item.about}
          </p>
        </div>

        <div className={styles.block}>
          <h3>
            {type === 'projects'
              ? 'Основные проекты'
              : 'Основные задачи'}
          </h3>

          <ul className={styles.list}>
            {item.tasks.map((task) => (
              <li key={task}>
                {task}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3>Технологии</h3>

          <div className={styles.tags}>
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className={styles.tag}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}