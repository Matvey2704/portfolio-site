import { useState } from 'react'
import { RoadmapModal } from '../../ui/RoadmapModal/RoadmapModal'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import { Button } from '../../ui/Button/Button'
import { Reveal } from '../../common/Reveal/Reveal'
import { Carousel } from '../../common/Carousel/Carousel'
import styles from './ProjectsSection.module.scss'

type Project = {
  title: string
  desc: string
  tags: string[]
  demo?: string
  code?: string
  note?: string
}

const projects: Project[] = [
  {
    title: 'Планы развития',
    desc: 'Портфолио регулярно пополняется новыми коммерческими и pet-проектами. Посмотрите, над чем я работаю сейчас и что планирую реализовать дальше.',
    tags: ['Roadmap', 'React', 'Новые проекты'],
    note: 'Нажмите «Посмотреть планы», чтобы открыть roadmap.',
  },
  {
    title: 'DevSpace',
    desc: 'Персональный сервис для разработчика: библиотека проектов с прогрессом, задачи, календарь, аналитика и режим фокуса. Собственная JWT-аутентификация без сторонних провайдеров (Clerk/NextAuth).',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    demo: 'https://dev-space-p9cg.vercel.app/',
    code: 'https://github.com/Matvey2704/DevSpace',
    note: 'Ежедневник разработчика.',
  },
  {
    title: 'Users Dashboard',
    desc: 'Админ-панель для управления базой из 2500+ пользователей: поиск, комбинированная фильтрация, сортировка и пагинация с синхронизацией состояния между страницами.',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'REST API'],
    demo: 'https://users-dashboard-beryl.vercel.app',
    code: 'https://github.com/Matvey2704/users-dashboard',
    note: 'Задание с акцентом на архитектуру, типизацию и работу с данными.',
  },
  {
    title: 'Дебаг и стабилизация API',
    desc: 'Интерактивная панель для анализа API-запросов: фильтрация по статусам, просмотр payload, обработка ошибок и повтор запросов.',
    tags: ['React', 'API', 'Debugging'],
    demo: 'https://react-api-debug-panel.vercel.app',
    code: 'https://github.com/Matvey2704/react-api-debug-panel',
    note: 'Реплика реальной задачи из продуктовой разработки',
  },
  {
    title: 'Форма отзывов с API',
    desc: 'Реализовал форму отзывов с API: настроил отправку, обработку ошибок и обновление UI. Устранил нестабильное поведение при сбоях и сделал UI предсказуемым во всех состояниях (loading / success / error).',
    tags: ['React', 'API', 'Debugging'],
    demo: 'https://react-review-form-theta.vercel.app',
    code: 'https://github.com/Matvey2704/react-review-form',
    note: 'Исправил ошибки запросов, реализовал обновление UI и устранил рассинхрон состояния. Упрощённая версия — оригинал под NDA',
  },
  {
    title: 'Верстка по макету + API',
    desc: 'Сверстал интерфейс по макету и подключил API. Реализовал состояния загрузки, пустых данных и ошибок, обеспечив предсказуемое поведение UI при разных сценариях.',
    tags: ['React', 'TypeScript', 'API'],
    demo: 'https://react-profile-dashboard-psi.vercel.app',
    code: 'https://github.com/Matvey2704/react-profile-dashboard',
    note: 'Реализовал поиск, табы и обработку состояний списка. Упрощённая версия — оригинал под NDA',
  },
  {
    title: 'Доработка интернет-магазина на CS-Cart',
    desc: 'Коммерческий проект по развитию интернет-магазина: доработка административной панели, работа с профильными полями пользователей, шаблонами Smarty, SQL-запросами и исправление ошибок.',
    tags: ['CS-Cart', 'PHP', 'Smarty', 'SQL'],
    note: 'Коммерческий проект. Исходный код и демо недоступны по условиям NDA.',
  },
]

const STAGGER_STEP = 90
const STAGGER_MAX_STEPS = 4

export function ProjectsSection() {
  const [roadmapOpen, setRoadmapOpen] = useState(false)

  return (
    <section id="projects" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Проекты"
          title="Реальные задачи, которые я закрывал"
          desc="Кейсы из продуктовой разработки: API, баги, интеграции и доведение фич до рабочего состояния."
        />

        <Carousel ariaLabel="Проекты">
          {projects.map((p, index) => (
            <Reveal
              key={p.title}
              direction="up"
              delay={(index % STAGGER_MAX_STEPS) * STAGGER_STEP}
            >
              <Card className={styles.card}>
                <div className={styles.title}>{p.title}</div>

                <div className={styles.desc}>{p.desc}</div>

                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  {p.title === 'Планы развития' ? (
                    <Button onClick={() => setRoadmapOpen(true)}>
                      Посмотреть планы
                    </Button>
                  ) : (
                    <>
                      {p.demo && (
                        <Button href={p.demo} target="_blank">
                          Demo
                        </Button>
                      )}

                      {p.code && (
                        <Button href={p.code} target="_blank" variant="ghost">
                          Code
                        </Button>
                      )}
                    </>
                  )}
                </div>

                {p.note && <div className={styles.note}>{p.note}</div>}
              </Card>
            </Reveal>
          ))}
        </Carousel>
      </Container>

      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </section>
  )
}