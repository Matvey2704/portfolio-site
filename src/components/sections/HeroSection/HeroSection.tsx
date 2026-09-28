import { useState } from 'react'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import { FlipCard } from '../../common/FlipCard/FlipCard'
import { ContactModal } from '../../ui/ContactModal/ContactModal'
import photo from '../../../assets/photo-199809414.jpg'
import styles from './HeroSection.module.scss'

export function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <section className={styles.hero} aria-label="Вступление">
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.kicker}>Frontend / Fullstack Developer</div>
            <h1 className={styles.title}>
              Разработчик, который доводит задачи до рабочего состояния
            </h1>
            <p className={styles.subtitle}>
              React / Vue / TypeScript / Next.js

              От интерфейса до бэкенда и API — собираю продукт целиком и делаю его стабильным в продакшене
            </p>
            <p className={styles.status}> Открыт к работе (full-time / freelance)</p>
            <div className={styles.actions}>
              <Button onClick={() => setContactOpen(true)}>Связаться</Button>
              <Button href="#projects" variant="ghost">
                Посмотреть проекты
              </Button>
            </div>
          </div>

          <FlipCard
            className={styles.flipCard}
            front={
              <img src={photo} alt="Матвей Юмин" className={styles.photoFace} />
            }
            back={
              <div className={`${styles.panel} ${styles.panelFace}`}>
                <div className={styles.panelName}>Матвей Юмин — Fullstack Developer</div>
                <div className={styles.panelTitle}>Могу помочь с:</div>
                <ul className={styles.list}>
                  <li>Довожу фичи до продакшена</li>
                  <li>Интеграции API и собственный бэкенд (Next.js, PostgreSQL)</li>
                  <li>Исправление багов и нестабильного поведения</li>
                  <li>Поддержка и ускорение фронтенда</li>
                </ul>
              </div>
            }
          />
        </div>
      </Container>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </section>
  )
}