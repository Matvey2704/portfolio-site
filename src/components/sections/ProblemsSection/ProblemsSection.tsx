import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './ProblemsSection.module.scss'

export function ProblemsSection() {
  const { t } = useLanguage()

  return (
    <section className={styles.section} aria-label={t.problems.aria}>
      <Container>
        <SectionHeading
          eyebrow={t.problems.eyebrow}
          title={t.problems.title}
          desc={t.problems.desc}
        />

        <div className={styles.grid}>
          {t.problems.items.map((x) => (
            <Card key={x.title} className={styles.card}>
              <div className={styles.cardTitle}>{x.title}</div>
              <div className={styles.cardDesc}>{x.desc}</div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
