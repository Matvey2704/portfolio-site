import { useState } from 'react'
import { ExperienceModal } from '../../ui/ExperienceModal/ExperienceModal'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import { Button } from '../../ui/Button/Button'
import { Reveal } from '../../common/Reveal/Reveal'
import { Carousel } from '../../common/Carousel/Carousel'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './ExperienceSection.module.scss'

type ExperienceType = 'gf-digital' | 'autorena' | 'aquaopt' | 'projects'

const experience: { id: ExperienceType; tags: string[] }[] = [
  { id: 'gf-digital', tags: ['React', 'TanStack Router', 'TypeScript', 'Tailwind CSS'] },
  { id: 'autorena', tags: ['React', 'TypeScript', 'Redux Toolkit', 'REST API'] },
  { id: 'aquaopt', tags: ['CS-Cart', 'PHP', 'MySQL', 'SQL'] },
  { id: 'projects', tags: ['Next.js', 'Prisma', 'Vue 3', 'TypeScript'] },
]

export function ExperienceSection() {
  const { t } = useLanguage()
  const [selected, setSelected] = useState<ExperienceType | null>(null)

  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          desc={t.experience.desc}
        />

        <Carousel ariaLabel={t.experience.carouselAria}>
          {experience.map(({ id, tags }, index) => {
            const item = t.experience.items[id]

            return (
              <Reveal key={id} direction="up" delay={index * 100}>
                <Card className={styles.card}>
                  <div className={styles.header}>
                    <div>
                      <div className={styles.company}>{item.company}</div>
                      <div className={styles.role}>{item.role}</div>
                    </div>

                    <span className={styles.type}>{item.type}</span>
                  </div>

                  <p className={styles.description}>{item.description}</p>

                  <div className={styles.tags}>
                    {tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    <Button onClick={() => setSelected(id)}>{t.experience.more}</Button>
                  </div>
                </Card>
              </Reveal>
            )
          })}
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
