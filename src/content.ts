export const profile = {
  name: 'Юмин Матвей',
  title: 'Frontend Developer',
  short:
    'Делаю UI, интегрирую API, отлаживаю сложные кейсы и довожу фичи до production.',
  about:
    'Работаю с реальными продуктами: интерфейсы, данные, интеграции, фиксы и улучшения. Люблю чистую архитектуру на фронте, предсказуемое состояние и понятные UX-паттерны — чтобы фича была удобной, стабильной и поддерживаемой.',
  tasks: [
    {
      title: 'Интеграция API',
      desc: 'Подключаю REST/GraphQL, обрабатываю ошибки, состояния загрузки и edge-cases.',
    },
    {
      title: 'Исправление багов',
      desc: 'Локализую причину, пишу фиксы без регрессий и улучшаю читаемость кода.',
    },
    {
      title: 'Формы и данные',
      desc: 'Валидации, черновики, автосейв, сложные сценарии ввода и отображения.',
    },
    {
      title: 'Адаптивный UI',
      desc: 'Сетка, типографика и компоненты, которые хорошо выглядят на любом экране.',
    },
  ],
  projects: [
    {
      title: 'Dashboard для аналитики',
      desc: 'Собрал интерфейс для мониторинга метрик: фильтры, графики, таблицы, сохранённые представления.',
      stack: ['React', 'TypeScript', 'Vite', 'SCSS Modules'],
      links: [{ label: 'Демо', href: '#' }],
    },
    {
      title: 'NDA: внутренний продукт',
      desc: 'Работал над фичами, интеграциями и улучшением стабильности. Код закрыт, но могу рассказать про архитектуру и подходы.',
      stack: ['React', 'TypeScript', 'API интеграции', 'Bugfixing'],
      nda: true,
      links: [{ label: 'Описание', href: '#projects' }],
    },
    {
      title: 'UI Kit + формы',
      desc: 'Сделал набор переиспользуемых компонентов, формы с валидацией и единый дизайн-токен слой.',
      stack: ['React', 'TypeScript', 'Framer Motion', 'SCSS'],
      links: [{ label: 'GitHub', href: '#' }],
    },
  ],
  skills: {
    Frontend: ['React', 'TypeScript', 'Vite', 'CSS/SCSS', 'Accessibility'],
    API: ['REST', 'Fetch/Axios', 'Ошибки/ретраи', 'Состояния данных', 'Edge-cases'],
    Tools: ['Git', 'ESLint', 'Figma', 'Chrome DevTools', 'CI basics'],
  },
  contacts: {
  github: {
    label: 'GitHub',
    href: 'https://github.com/Matvey2704',
  },
  telegram: {
    label: 'Telegram',
    href: 'https://t.me/yuminmatvei',
  },
  email: {
    label: 'Email',
    href: 'mailto:yuminmatvei@gmail.com',
  },
}
} as const

