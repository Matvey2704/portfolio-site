import styles from './ExperienceModal.module.scss'

type ExperienceType =
  | 'gf-digital'
  | 'autorena'
  | 'aquaopt'
  | 'projects'

type Props = {
  open: boolean
  type: ExperienceType | null
  onClose: () => void
}

const content = {
  'gf-digital': {
    title: 'GF Digital',
    role: 'Frontend Developer',

    about:
      'Веб-студия. Разработка маркетингового сайта-визитки: архитектура на React + TanStack Router с файловым роутингом, переиспользуемые layout-компоненты и общий контекст на уровне корневого layout.',

    tasks: [
      'Архитектура роутинга на TanStack Router (createFileRoute)',
      'Кастомные scroll-reveal анимации на IntersectionObserver без сторонних библиотек',
      '3D flip-карточки услуг и аккордеон на чистом CSS Grid',
      'Sticky-навигация с автоподсветкой активной секции',
      'Работа под TypeScript strict mode',
      'Git-flow с feature-ветками, Merge Request в GitLab',
    ],

    technologies: [
      'React',
      'TanStack Router',
      'TypeScript',
      'Tailwind CSS',
      'Git',
    ],
  },

  autorena: {
    title: 'Autorena',
    role: 'Frontend Developer',

    about:
      'Разработка и развитие продуктового веб-приложения автомобильной тематики. Работа над пользовательским интерфейсом, интеграцией API и развитием существующего функционала.',

    tasks: [
      'Разработка интерфейсов на React и TypeScript',
      'Интеграция 15+ REST API',
      'Работа с Redux Toolkit и RTK Query — снижение повторных запросов на ~30%',
      'Оптимизация рендера (React.memo, useMemo, useCallback)',
      'Юнит-тесты на Jest и React Testing Library',
      'Работа с Docker и Git в команде',
    ],

    technologies: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'REST API',
      'Docker',
      'Git',
    ],
  },

  aquaopt: {
    title: 'AquaOpt',
    role: 'Frontend Developer / Support',

    about:
      'Коммерческий интернет-магазин на CS-Cart. Диагностика производительности, устранение аварийных ситуаций в БД и защита от атак на боевом проекте с недокументированной legacy-кодовой базой.',

    tasks: [
      'Устранение хронических зависаний сайта (до 45 сек) — независимое расследование после неудачных внешних аудитов',
      'Диагностика и устранение деадлока InnoDB через SHOW ENGINE INNODB STATUS',
      'Снижение TTFB в 3-4 раза (с 3.8с до ~1с)',
      'Защита от CSRF/спам-атаки: капча, рейт-лимитинг, Telegram-алерты',
      'Работа с ~140 сторонними модулями без документации',
      'Bash-скрипты для мониторинга производительности и автоматизации',
    ],

    technologies: [
      'CS-Cart',
      'PHP',
      'MySQL',
      'SQL',
      'Redis',
      'Git',
    ],
  },

  projects: {
    title: 'Собственные проекты',
    role: 'Fullstack Developer',

    about:
      'Постоянно развиваю практические навыки через собственные проекты, тестовые задания и изучение современных технологий.',

    tasks: [
      'DevSpace — ежедневник разработчика на Next.js с собственной JWT-аутентификацией',
      'Users Dashboard',
      'React Review Form',
      'API Debug Panel',
      'Portfolio Website',
    ],

    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Prisma',
      'React Query',
    ],
  },
}

export function ExperienceModal({ open, type, onClose }: Props) {
  if (!open || !type) return null

  const item = content[type]

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.title}>{item.title}</h2>

        <p className={styles.role}>{item.role}</p>

        <div className={styles.block}>
          <h3>О проекте</h3>
          <p>{item.about}</p>
        </div>

        <div className={styles.block}>
          <h3>{type === 'projects' ? 'Основные проекты' : 'Основные задачи'}</h3>

          <ul className={styles.list}>
            {item.tasks.map((task) => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>

        <div className={styles.block}>
          <h3>Технологии</h3>

          <div className={styles.tags}>
            {item.technologies.map((tech) => (
              <span key={tech} className={styles.tag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}