import { useLanguage } from '../../../i18n/useLanguage'
import type { Lang } from '../../../i18n/context'
import styles from './LangSwitch.module.scss'

const options: Lang[] = ['ru', 'en']

export function LangSwitch() {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className={styles.group} role="group" aria-label={t.switchers.langAria}>
      {options.map((code) => (
        <button
          key={code}
          type="button"
          className={`${styles.option} ${lang === code ? styles.active : ''}`}
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
