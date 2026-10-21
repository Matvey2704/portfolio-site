import { useLanguage } from '../../../i18n/useLanguage'
import { useTheme } from '../../../theme/useTheme'
import styles from './MascotToggle.module.scss'

/** Кнопка показать/скрыть чиби-талисмана. Есть только в аниме-теме. */
export function MascotToggle() {
  const { t } = useLanguage()
  const { theme, mascot, setMascot } = useTheme()

  if (theme !== 'anime') return null

  return (
    <div className={styles.group}>
      <button
        type="button"
        className={`${styles.option} ${mascot ? styles.active : ''}`}
        aria-pressed={mascot}
        title={t.switchers.mascotTitle}
        onClick={() => setMascot(!mascot)}
      >
        <span aria-hidden="true">✿</span> {t.switchers.mascot}
      </button>
    </div>
  )
}
