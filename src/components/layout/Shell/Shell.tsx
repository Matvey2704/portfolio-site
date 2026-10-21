import { Container } from '../../ui/Container/Container'
import { LangSwitch } from '../../ui/LangSwitch/LangSwitch'
import { ThemeSwitch } from '../../ui/ThemeSwitch/ThemeSwitch'
import { useLanguage } from '../../../i18n/useLanguage'
import styles from './Shell.module.scss'

export function Shell(props: { children: React.ReactNode }) {
  const { t } = useLanguage()

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerInner}>
            <a className={styles.brand} href="#top">
              {t.nav.brand}
            </a>
            <div className={styles.right}>
              <nav className={styles.nav} aria-label={t.nav.aria}>
                <a href="#about">{t.nav.about}</a>
                <a href="#projects">{t.nav.projects}</a>
                <a href="#skills">{t.nav.skills}</a>
                <a href="#contact">{t.nav.contact}</a>
              </nav>
              <div className={styles.controls}>
                <ThemeSwitch />
                <LangSwitch />
              </div>
            </div>
          </div>
        </Container>
      </header>

      <main id="top" className={styles.main}>
        {props.children}
      </main>

      <footer className={styles.footer}>
        <Container>
          <div className={styles.footerInner}>
            <span>© {new Date().getFullYear()}</span>

            <a href="#top" className={styles.scrollTop} aria-label={t.nav.top}>
              ↑
            </a>
          </div>
        </Container>
      </footer>
    </div>
  )
}
