import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './context'

const STORAGE_KEY = 'theme'
const MASCOT_KEY = 'mascot'

function detectInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'default' || saved === 'win98' || saved === 'anime') return saved
  } catch {
    // localStorage может быть недоступен — используем тему по умолчанию
  }
  return 'default'
}

function detectInitialMascot(): boolean {
  try {
    return localStorage.getItem(MASCOT_KEY) !== 'off'
  } catch {
    return true
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(detectInitialTheme)
  const [mascot, setMascotState] = useState<boolean>(detectInitialMascot)

  const setTheme = (next: Theme) => {
    setThemeState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }

  const setMascot = (next: boolean) => {
    setMascotState(next)
    try {
      localStorage.setItem(MASCOT_KEY, next ? 'on' : 'off')
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme, mascot, setMascot }), [theme, mascot])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
