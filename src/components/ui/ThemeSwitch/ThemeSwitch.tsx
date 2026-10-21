import { useLanguage } from '../../../i18n/useLanguage'
import { useTheme } from '../../../theme/useTheme'
import type { Theme } from '../../../theme/context'
import styles from './ThemeSwitch.module.scss'

export function ThemeSwitch() {
  const { t } = useLanguage()
  const { theme, setTheme } = useTheme()

  const options: { id: Theme; label: string }[] = [
    { id: 'default', label: t.switchers.themeDefault },
    { id: 'win98', label: t.switchers.themeWin98 },
  ]

  return (
    <div className={styles.group} role="group" aria-label={t.switchers.themeAria}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          className={`${styles.option} ${theme === o.id ? styles.active : ''}`}
          aria-pressed={theme === o.id}
          onClick={() => setTheme(o.id)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
