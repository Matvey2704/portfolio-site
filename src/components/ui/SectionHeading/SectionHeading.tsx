import styles from './SectionHeading.module.scss'

export function SectionHeading(props: {
  eyebrow?: string
  title: string
  desc?: string
}) {
  return (
    <header className={styles.header}>
      {props.eyebrow ? <div className={styles.eyebrow}>{props.eyebrow}</div> : null}
      <h2 className={styles.title}>{props.title}</h2>
      {props.desc ? <p className={styles.desc}>{props.desc}</p> : null}
    </header>
  )
}

