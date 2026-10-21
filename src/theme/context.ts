import { createContext } from 'react'

export type Theme = 'default' | 'win98' | 'anime'

export type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  /** Показывать ли чиби-талисман (работает в теме anime) */
  mascot: boolean
  setMascot: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
