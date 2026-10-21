import { createContext } from 'react'
import type { Dict } from './ru'

export type Lang = 'ru' | 'en'

export type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
