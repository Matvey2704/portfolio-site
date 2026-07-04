import { useState } from 'react'
import { ExperienceModal } from '../../ui/ExperienceModal/ExperienceModal'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import { Button } from '../../ui/Button/Button'
import styles from './ExperienceSection.module.scss'

type ExperienceType =
  | 'autorena'
  | 'cscart'
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
    id: 'autorena',
    company: 'Autorena',
    role: 'Frontend Developer',
    type: 'Продуктовая разработка',
    description: 'Разработка и развитие продуктового веб-приложения.',
    tags: ['React', 'TypeScript', 'REST API', 'Docker'],
  },

  {
    id: 'cscart',
    company: 'Aqulaplay',
    role: 'Frontend',
    type: 'E-commerce',
    description:
      'Развитие коммерческого интернет-магазина, доработка административной панели и поддержка существующего функционала.',
    tags: ['CS-Cart', 'PHP', 'Smarty', 'SQL'],
  },

  {
    id: 'projects',
    company: 'Собственные проекты',
    role: 'Frontend Developer',
    type: 'Практика',
    description:
      'Pet-проекты, тестовые задания и постоянное развитие практических навыков.',
    tags: ['React', 'Next.js', 'TypeScript', 'React Query'],
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

        <div className={styles.grid}>
          {experience.map((item) => (
            <Card
              key={item.company}
              className={styles.card}
            >
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
          ))}
        </div>
      </Container>
      <ExperienceModal
  open={selected !== null}
  type={selected}
  onClose={() => setSelected(null)}
/>
    </section>
  )
}