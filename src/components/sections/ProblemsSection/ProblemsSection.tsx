import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Card } from '../../ui/Card/Card'
import styles from './ProblemsSection.module.scss'

const items = [
  {
    title: 'UI, который не ломается на реальных данных',
    desc: 'Адаптив, состояния, аккуратная верстка и понятное поведение на разных экранах.',
  },
  {
    title: 'API без хаоса в интерфейсе',
    desc: 'Подключаю данные, обрабатываю ошибки, loading-состояния и обновление UI после действий пользователя.',
  },
  {
    title: 'Фиксы без новых поломок',
    desc: 'Разбираюсь в существующем коде, чиню баги, рефакторю и довожу фичи до стабильного состояния.',
  },
]

export function ProblemsSection() {
  return (
    <section className={styles.section} aria-label="Что умею закрывать">
      <Container>
        <SectionHeading
          eyebrow="Чем полезен"
          title="Закрываю типовые проблемы в продукте"
          desc="Помогаю сделать интерфейс стабильным, понятным пользователю и удобным для поддержки командой."
        />

        <div className={styles.grid}>
          {items.map((x) => (
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

