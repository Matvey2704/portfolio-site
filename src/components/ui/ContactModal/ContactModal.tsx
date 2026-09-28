import { Button } from '../Button/Button'
import styles from './ContactModal.module.scss'

type ContactModalProps = {
  open: boolean
  onClose: () => void
}

const email = 'yuminmatvei@gmail.com'
const tg = 'https://t.me/yuminmatvey'
const github = 'https://github.com/Matvey2704'

export function ContactModal({ open, onClose }: ContactModalProps) {
  if (!open) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Закрыть">
          ×
        </button>

        <h2 className={styles.title}>Давайте обсудим задачу</h2>

        <div className={styles.row}>
          <div>
            <div className={styles.label}>Email</div>
            <div className={styles.value}>{email}</div>
          </div>

          <Button onClick={() => navigator.clipboard.writeText(email)} variant="primary">
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
            <a className={styles.value} href={github} target="_blank" rel="noreferrer">
              {github.replace('https://github.com/', '')}
            </a>
          </div>

          <Button href={github} target="_blank" variant="ghost">
            Смотреть
          </Button>
        </div>
      </div>
    </div>
  )
}