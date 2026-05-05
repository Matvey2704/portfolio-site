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
          title="Пишу поддерживаемый фронтенд"
          desc="Фокус на интерфейсах, стабильности и понятной архитектуре."
        />

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Работаю от интерфейса до интеграции API и доведения до продакшена.
              Не просто пишу UI, а разбираюсь, как он ведет себя реальными даннымии в разных состояниях.
            </p>
            <p>
              В работе ценю предсказуемость: типы, единый стиль, небольшие
              компоненты и код, который можно спокойно поддерживать.
            </p>
            <p>
              Работаю в стартапе, поэтому привык быстро разбираться в задачах и доводить их до рабочего состояния.
            </p>
          </div>

          <div className={styles.stack} aria-label="Стек">
            <Chip>React</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Vite</Chip>
            <Chip>SCSS Modules</Chip>
            <Chip>ESLint</Chip>
          </div>
        </div>
      </Container>
    </section>
  )
}

