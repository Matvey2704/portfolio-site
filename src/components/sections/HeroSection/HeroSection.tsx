import { useState } from 'react'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import { FlipCard } from '../../common/FlipCard/FlipCard'
import { ContactModal } from '../../ui/ContactModal/ContactModal'
import { useLanguage } from '../../../i18n/useLanguage'
import photo from '../../../assets/photo-199809414.jpg'
import styles from './HeroSection.module.scss'

export function HeroSection() {
  const { t } = useLanguage()
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <section className={styles.hero} aria-label={t.hero.aria}>
      <Container>
        <div className={styles.grid}>
          <div>
            <div className={styles.kicker}>{t.hero.kicker}</div>
            <h1 className={styles.title}>{t.hero.title}</h1>
            <p className={styles.subtitle}>{t.hero.subtitle}</p>
            <p className={styles.status}>{t.hero.status}</p>
            <div className={styles.actions}>
              <Button onClick={() => setContactOpen(true)}>{t.hero.contact}</Button>
              <Button href="#projects" variant="ghost">
                {t.hero.viewProjects}
              </Button>
            </div>
          </div>

          <FlipCard
            className={styles.flipCard}
            front={<img src={photo} alt={t.hero.photoAlt} className={styles.photoFace} />}
            back={
              <div className={`${styles.panel} ${styles.panelFace}`}>
                <div className={styles.panelName}>{t.hero.backName}</div>
                <div className={styles.panelTitle}>{t.hero.backTitle}</div>
                <ul className={styles.list}>
                  {t.hero.backList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
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
