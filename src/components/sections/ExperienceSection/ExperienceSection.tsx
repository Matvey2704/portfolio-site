import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import styles from './ExperienceSection.module.scss'

const items = [
  'Подключал API и обрабатывал состояния интерфейса',
  'Исправлял ошибки запросов и нестабильное поведение',
  'Работал с React, TypeScript, Docker и конфликтами в проекте',
]

export function ExperienceSection() {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Опыт"
          title="Работаю с реальным продуктом"
          desc="Разработчик в стартапе Autorena. Занимаюсь фронтендом, API-интеграциями, исправлением багов и доработкой фич."
        />

        <Card className={styles.card}>
          <div className={styles.company}>Autorena</div>
          <div className={styles.role}>Frontend / Product Developer</div>

          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  )
}