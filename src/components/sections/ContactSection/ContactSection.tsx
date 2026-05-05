import { Container } from '../../ui/Container/Container'
import { SectionHeading } from '../../ui/SectionHeading/SectionHeading'
import { Button } from '../../ui/Button/Button'
import { Card } from '../../ui/Card/Card'
import styles from './ContactSection.module.scss'

export function ContactSection() {
  const email = 'yuminmatvei@gmail.com'
  const tg = 'https://t.me/yuminmatvey'
  const github = 'https://github.com/Matvey2704'

  return (
    <section id="contact" className={styles.section}>
      <Container>
        <SectionHeading
          eyebrow="Контакты"
          title="Давайте обсудим задачу"
        />

        <Card className={styles.card}>
          <div className={styles.row}>
  <div>
    <div className={styles.label}>Email</div>
    <div className={styles.value}>{email}</div>
  </div>

  <Button
    onClick={() => navigator.clipboard.writeText(email)}
    variant="primary"
  >
    Скопировать
  </Button>
</div>

          <div className={styles.row}>
            <div>
              <div className={styles.label}>Telegram</div>
              <a className={styles.value} href={tg} target="_blank" rel="noreferrer">
                {tg.replace('https://', '')}
              </a>
            </div>
            <Button href={tg} target="_blank" variant="primary">
              Написать
            </Button>
          </div>

          <div className={styles.row}>
  <div>
    <div className={styles.label}>GitHub</div>
    <a
      className={styles.value}
      href={github}
      target="_blank"
      rel="noreferrer"
    >
      {github.replace('https://github.com/', '')}
    </a>
  </div>

  <Button href={github} target="_blank" variant="ghost">
    Смотреть
  </Button>
</div>
        </Card>
      </Container>
    </section>
  )
}

