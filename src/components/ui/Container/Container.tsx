import styles from './Container.module.scss'

export function Container(props: { children: React.ReactNode }) {
  return <div className={styles.container}>{props.children}</div>
}

