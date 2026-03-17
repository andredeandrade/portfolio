'use client'

import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/i18n/config'

type LocaleToggleProps = {
  locale: Locale
  label: string
}

export function LocaleToggle({ locale, label }: LocaleToggleProps) {
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = () => {
    const nextLocale: Locale = locale === 'pt' ? 'en' : 'pt'
    const segments = pathname.split('/').filter(Boolean)

    if (segments.length === 0) {
      router.push(`/${nextLocale}`)
      return
    }

    segments[0] = nextLocale
    router.push(`/${segments.join('/')}`)
  }

  return (
    <button
      onClick={switchLocale}
      className="rounded-full border border-[var(--topbar-text-soft)]/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--topbar-text)] transition-colors hover:bg-[var(--topbar-hover)]"
    >
      {label}
    </button>
  )
}
