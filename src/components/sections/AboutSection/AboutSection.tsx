import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Chip } from '../../ui/Chip/Chip'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './AboutSection.module.scss'

const stack = ['React', 'Vue 3', 'TypeScript', 'Next.js', 'Node.js', 'PostgreSQL', 'SCSS Modules']

export function AboutSection() {
  const { t } = useLanguage()

  return (
    <section id="about" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          desc={t.about.desc}
        />

        <div className={styles.grid}>
          <div className={styles.text}>
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className={styles.stack} aria-label={t.about.stackAria}>
            {stack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
