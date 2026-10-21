import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, type Lang } from './context'
import { en } from './en'
import { ru } from './ru'

const STORAGE_KEY = 'lang'

const dictionaries = { ru, en }

function detectInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'ru' || saved === 'en') return saved
  } catch {
    // localStorage может быть недоступен (приватный режим) — не страшно
  }
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)
  const t = dictionaries[lang]

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.meta.title
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t.meta.description)
  }, [lang, t])

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
