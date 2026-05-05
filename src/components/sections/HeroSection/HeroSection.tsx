import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import styles from './HeroSection.module.scss'

export function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Вступление">
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.kicker}>Frontend Developer</div>
            <h1 className={styles.title}>
              Фронтенд разработчик, который доводит задачи до рабочего состояния
            </h1>
            <p className={styles.subtitle}>
              React / TypeScript / API интеграции  

Исправляю баги, подключаю бэкенд и делаю UI стабильным в продакшене
            </p>
            <p className={styles.status}> Открыт к работе (full-time / freelance)</p>
            <div className={styles.actions}>
              <Button href="#projects">Связаться</Button>
              <Button href="#contact" variant="ghost">
                Посмотреть проекты
              </Button>
            </div>
          </div>

          <div className={styles.panel}>
            <div className={styles.panelTitle}>Сейчас могу помочь с:</div>
            <ul className={styles.list}>
              <li>Довожу фичи до продакшена</li>
              <li>Интеграции API (REST / GraphQL)</li>
              <li>Исправление багов и нестабильного поведения</li>
              <li>Поддержка и ускорение фронтенда</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

