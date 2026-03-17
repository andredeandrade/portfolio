'use client'

import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  switchToLight: string
  switchToDark: string
}

export function ThemeToggle({ switchToLight, switchToDark }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const savedTheme = localStorage.getItem('portfolio:theme')
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    localStorage.setItem('portfolio:theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={theme === 'dark' ? switchToLight : switchToDark}
      title={theme === 'dark' ? switchToLight : switchToDark}
      className="grid h-9 w-9 place-items-center rounded-full text-[var(--topbar-text)] transition-colors hover:bg-[var(--topbar-hover)]"
    >
      <span className="sr-only">
        {theme === 'dark' ? switchToLight : switchToDark}
      </span>

      {theme === 'dark' ? (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 fill-current"
          aria-hidden="true"
        >
          <path d="M14.8 3.3a8.7 8.7 0 0 0 5.9 12.6A9 9 0 1 1 14.8 3.3" />
        </svg>
      )}
    </button>
  )
}
