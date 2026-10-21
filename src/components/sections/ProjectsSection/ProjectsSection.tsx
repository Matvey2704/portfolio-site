import { useState } from 'react'
import { RoadmapModal } from '../../ui/RoadmapModal/RoadmapModal'
import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import { Button } from '../../ui/Button/Button'
import { Reveal } from '../../common/Reveal/Reveal'
import { Carousel } from '../../common/Carousel/Carousel'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './ProjectsSection.module.scss'

type ProjectId = 'roadmap' | 'devspace' | 'users' | 'apidebug' | 'review' | 'layout' | 'cscart'

type ProjectMeta = {
  id: ProjectId
  tags: string[]
  demo?: string
  code?: string
}

const projects: ProjectMeta[] = [
  { id: 'roadmap', tags: ['Roadmap', 'React'] },
  {
    id: 'devspace',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    demo: 'https://dev-space-p9cg.vercel.app/',
    code: 'https://github.com/Matvey2704/DevSpace',
  },
  {
    id: 'users',
    tags: ['Vue 3', 'TypeScript', 'Pinia', 'REST API'],
    demo: 'https://users-dashboard-beryl.vercel.app',
    code: 'https://github.com/Matvey2704/users-dashboard',
  },
  {
    id: 'apidebug',
    tags: ['React', 'API', 'Debugging'],
    demo: 'https://react-api-debug-panel.vercel.app',
    code: 'https://github.com/Matvey2704/react-api-debug-panel',
  },
  {
    id: 'review',
    tags: ['React', 'API', 'Debugging'],
    demo: 'https://react-review-form-theta.vercel.app',
    code: 'https://github.com/Matvey2704/react-review-form',
  },
  {
    id: 'layout',
    tags: ['React', 'TypeScript', 'API'],
    demo: 'https://react-profile-dashboard-psi.vercel.app',
    code: 'https://github.com/Matvey2704/react-profile-dashboard',
  },
  { id: 'cscart', tags: ['CS-Cart', 'PHP', 'Smarty', 'SQL'] },
]

const STAGGER_STEP = 90
const STAGGER_MAX_STEPS = 4

export function ProjectsSection() {
  const { t } = useLanguage()
  const [roadmapOpen, setRoadmapOpen] = useState(false)

  return (
    <section id="projects" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          desc={t.projects.desc}
        />

        <Carousel ariaLabel={t.projects.carouselAria}>
          {projects.map((p, index) => {
            const text = t.projects.items[p.id]
            const tags = p.id === 'roadmap' ? [...p.tags, t.projects.newProjectsTag] : p.tags

            return (
              <Reveal
                key={p.id}
                direction="up"
                delay={(index % STAGGER_MAX_STEPS) * STAGGER_STEP}
              >
                <Card className={styles.card}>
                  <div className={styles.title}>{text.title}</div>

                  <div className={styles.desc}>{text.desc}</div>

                  <div className={styles.tags}>
                    {tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={styles.actions}>
                    {p.id === 'roadmap' ? (
                      <Button onClick={() => setRoadmapOpen(true)}>
                        {t.projects.plansButton}
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

                  {text.note && <div className={styles.note}>{text.note}</div>}
                </Card>
              </Reveal>
            )
          })}
        </Carousel>
      </Container>

      <RoadmapModal open={roadmapOpen} onClose={() => setRoadmapOpen(false)} />
    </section>
  )
}
