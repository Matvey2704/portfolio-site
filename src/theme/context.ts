import { createContext } from 'react'

export type Theme = 'default' | 'win98'

export type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
