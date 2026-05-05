import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import { Button } from '../../ui/Button/Button'
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
  title: 'Форма отзывов с API',
  desc: 'Реализовал форму отзывов с API: настроил отправку, обработку ошибок и обновление UI. Устранил нестабильное поведение при сбоях и сделал UI предсказуемым во всех состояниях (loading / success / error).',
  tags: ['React / API / Debugging'],
  demo: 'https://react-review-form-theta.vercel.app',
  code: 'https://github.com/Matvey2704/react-review-form',
  note: 'Исправил ошибки запросов, реализовал обновление UI и устранил рассинхрон состояния. Упрощённая версия — оригинал под NDA',
},
  {
  title: 'Верстка по макету + API',
  desc: 'Сверстал интерфейс по макету и подключил API. Реализовал состояния загрузки, пустых данных и ошибок, обеспечив предсказуемое поведение UI при разных сценариях.',
  tags: ['React / TypeScript / API'],
  demo: 'https://react-profile-dashboard-psi.vercel.app',
  code: 'https://github.com/Matvey2704/react-profile-dashboard',
  note: 'Реализовал поиск, табы и обработку состояний списка. Упрощённая версия — оригинал под NDA',
},
  {
  title: 'Дебаг и стабилизация API',
  desc: 'Интерактивная панель для анализа API-запросов: фильтрация по статусам, просмотр payload, обработка ошибок и повтор запросов.',
  tags: ['API / Debugging / UX'],
  demo: 'https://react-api-debug-panel.vercel.app',
  code: 'https://github.com/Matvey2704/react-api-debug-panel',
  note: 'Реплика реальной задачи из продуктовой разработки',
}
]

export function ProjectsSection() {
  return (
    <section id="projects" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Проекты"
          title="Реальные задачи, которые я закрывал"
          desc="Кейсы из продуктовой разработки: API, баги, интеграции и доведение фич до рабочего состояния."
        />

        <div className={styles.grid}>
          {projects.map((p) => (
            <Card key={p.title} className={styles.card}>
              <div className={styles.title}>{p.title}</div>

              <div className={styles.desc}>{p.desc}</div>

              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>

              {(p.demo || p.code) && (
                <div className={styles.actions}>
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
                </div>
              )}

              {p.note && <div className={styles.note}>{p.note}</div>}
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}