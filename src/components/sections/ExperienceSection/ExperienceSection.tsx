import { useState } from 'react'
import { ExperienceModal } from '../../ui/ExperienceModal/ExperienceModal'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import { Button } from '../../ui/Button/Button'
import { Reveal } from '../../common/Reveal/Reveal'
import { Carousel } from '../../common/Carousel/Carousel'
import styles from './ExperienceSection.module.scss'

type ExperienceType =
  | 'gf-digital'
  | 'autorena'
  | 'aquaopt'
  | 'projects'

type Experience = {
  id: ExperienceType
  company: string
  role: string
  type: string
  description: string
  tags: string[]
}

const experience: Experience[] = [
  {
    id: 'gf-digital',
    company: 'GF Digital',
    role: 'Frontend Developer',
    type: 'Веб-студия',
    description:
      'Архитектура маркетингового сайта на React + TanStack Router: файловый роутинг, переиспользуемые layout-компоненты, кастомные scroll-reveal анимации и 3D flip-карточки без сторонних библиотек.',
    tags: ['React', 'TanStack Router', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'autorena',
    company: 'Autorena',
    role: 'Frontend Developer',
    type: 'Продуктовая разработка',
    description:
      'Разработка продуктового веб-приложения: 15+ экранов по Figma, 15+ REST API интеграций, Redux Toolkit + RTK Query — снижение повторных запросов на ~30%.',
    tags: ['React', 'TypeScript', 'Redux Toolkit', 'REST API'],
  },
  {
    id: 'aquaopt',
    company: 'AquaOpt',
    role: 'Frontend Developer / Support',
    type: 'E-commerce',
    description:
      'Диагностика и устранение хронических зависаний сайта (до 45 сек), деадлок в MySQL, снижение TTFB в 3-4 раза, защита от CSRF-атаки и настройка многоуровневой безопасности.',
    tags: ['CS-Cart', 'PHP', 'MySQL', 'SQL'],
  },
  {
    id: 'projects',
    company: 'Собственные проекты',
    role: 'Fullstack Developer',
    type: 'Практика',
    description:
      'DevSpace — сервис на Next.js с собственной JWT-аутентификацией без сторонних провайдеров; Users Dashboard — админка на Vue 3 + Pinia для 2500+ пользователей.',
    tags: ['Next.js', 'Prisma', 'Vue 3', 'TypeScript'],
  },
]

export function ExperienceSection() {
  const [selected, setSelected] = useState<ExperienceType | null>(null)

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Опыт"
          title="Работаю с реальными продуктами"
          desc="Коммерческий опыт разработки веб-приложений, интернет-магазинов и собственных проектов."
        />

        <Carousel ariaLabel="Опыт работы">
          {experience.map((item, index) => (
            <Reveal key={item.company} direction="up" delay={index * 100}>
              <Card className={styles.card}>
                <div className={styles.header}>
                  <div>
                    <div className={styles.company}>
                      {item.company}
                    </div>

                    <div className={styles.role}>
                      {item.role}
                    </div>
                  </div>

                  <span className={styles.type}>
                    {item.type}
                  </span>
                </div>

                <p className={styles.description}>
                  {item.description}
                </p>

                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.tag}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.actions}>
                  <Button
                    onClick={() => setSelected(item.id)}
                  >
                    Подробнее
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </Carousel>
      </Container>

      <ExperienceModal
        open={selected !== null}
        type={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  )
}