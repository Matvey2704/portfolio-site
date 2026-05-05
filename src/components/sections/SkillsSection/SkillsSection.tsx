import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Chip } from '../../ui/Chip/Chip'
import styles from './SkillsSection.module.scss'

const skills = [
  'React',
  'TypeScript',
  'Vite',
  'SCSS Modules',
  'Адаптивная верстка',
  'Доступность (a11y)',
  'API интеграции',
  'ESLint',
  'Git',
]

export function SkillsSection() {
  return (
    <section id="skills" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Навыки"
          title="Стек и практики"
        />

        <div className={styles.list}>
          {skills.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </Container>
    </section>
  )
}

