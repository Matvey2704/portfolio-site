import styles from './Chip.module.scss'

export function Chip(props: { children: React.ReactNode }) {
  return <span className={styles.chip}>{props.children}</span>
}

