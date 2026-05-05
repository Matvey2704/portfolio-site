import { motion } from 'framer-motion'
import styles from './Card.module.scss'

export function Card(props: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={[styles.card, props.className].filter(Boolean).join(' ')}
      initial={false}
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
    >
      {props.children}
    </motion.div>
  )
}

