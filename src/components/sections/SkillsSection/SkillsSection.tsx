import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Chip } from '../../ui/Chip/Chip'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './SkillsSection.module.scss'

export function SkillsSection() {
  const { t } = useLanguage()

  const skills = [
    'React',
    'Vue 3',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Redux Toolkit',
    'React Query',
    'Pinia',
    'REST API',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'Tailwind CSS',
    'SCSS Modules',
    t.skills.responsive,
    t.skills.a11y,
    'Jest',
    'Git',
  ]

  return (
    <section id="skills" className={styles.section}>
      <Container>
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className={styles.list}>
          {skills.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </Container>
    </section>
  )
}
