import { Container } from '../../ui/Container/Container'
import styles from './Shell.module.scss'

export function Shell(props: { children: React.ReactNode }) {
  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <Container>
          <div className={styles.headerInner}>
            <a className={styles.brand} href="#top">
              Frontend Developer
            </a>
            <nav className={styles.nav} aria-label="Навигация">
              <a href="#about">Обо мне</a>
              <a href="#projects">Проекты</a>
              <a href="#skills">Навыки</a>
              <a href="#contact">Контакты</a>
            </nav>
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

      <a
        href="#top"
        className={styles.scrollTop}
        aria-label="Наверх"
      >
        ↑
      </a>
    </div>
  </Container>
</footer>
    </div>
  )
}

