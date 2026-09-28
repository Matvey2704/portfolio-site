import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Chip } from '../../ui/Chip/Chip'
import styles from './AboutSection.module.scss'

export function AboutSection() {
  return (
    <section id="about" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Обо мне"
          title="Пишу поддерживаемый код — от интерфейса до бэкенда"
          desc="Фокус на интерфейсах, стабильности и понятной архитектуре."
        />

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Работаю от интерфейса до интеграции API и доведения до продакшена.
              Не просто пишу UI, а разбираюсь, как он ведёт себя с реальными данными и в разных состояниях.
            </p>
            <p>
              Есть хендс-он опыт полного цикла: спроектировал и собрал собственный сервис на Next.js с PostgreSQL/Prisma,
              включая JWT-аутентификацию с нуля.
            </p>
            <p>
              В работе ценю предсказуемость: типы, единый стиль, небольшие
              компоненты и код, который можно спокойно поддерживать.
            </p>
          </div>

          <div className={styles.stack} aria-label="Стек">
            <Chip>React</Chip>
            <Chip>Vue 3</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Next.js</Chip>
            <Chip>Node.js</Chip>
            <Chip>PostgreSQL</Chip>
            <Chip>SCSS Modules</Chip>
          </div>
        </div>
      </Container>
    </section>
  )
}