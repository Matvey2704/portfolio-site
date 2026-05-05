import { motion } from 'framer-motion'
import styles from './Button.module.scss'

type Variant = 'primary' | 'ghost'

export function Button(props: {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  target?: '_blank' | '_self'
  rel?: string
  variant?: Variant
}) {
  const { variant = 'primary' } = props

  const className = [
    styles.button,
    variant === 'primary' ? styles.primary : styles.ghost,
  ].join(' ')

  const common = {
    className,
  }

  if (props.href) {
    return (
      <motion.a
        {...common}
        href={props.href}
        target={props.target}
        rel={props.rel ?? (props.target === '_blank' ? 'noreferrer' : undefined)}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
      >
        {props.children}
      </motion.a>
    )
  }

  return (
    <motion.button
      {...common}
      type="button"
      onClick={props.onClick}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {props.children}
    </motion.button>
  )
}

