import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { MessageBundle } from '@/i18n/messages'
import { LocaleToggle } from '@/components/topBar/localeToggle'
import { SocialLinks } from '@/components/topBar/socialLinks'
import { TopBarMenu } from '@/components/topBar/menu'
import { MobileMenu } from '@/components/topBar/mobileMenu'

type TopBarProps = {
  locale: Locale
  text: MessageBundle
}

export function TopBar({ locale, text }: TopBarProps) {
  return (
    <header
      className="border-b border-[var(--topbar-border)] text-[var(--topbar-text)]"
      style={{ background: 'var(--topbar-bg)' }}
    >
      <div className="container flex h-20 items-center justify-between gap-5">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-xl font-medium"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="12" rx="2" />
            <path d="M2 20h20" />
          </svg>
          <span>{text.badge}</span>
        </Link>

        <TopBarMenu text={text} />

        {/* Desktop controls — hidden below 1024 px */}
        <div className="hidden items-center gap-2 lg:flex">
          <SocialLinks text={text} />
          <LocaleToggle locale={locale} label={text.localeSwitch} />
        </div>

        {/* Mobile hamburger — hidden at lg and above */}
        <MobileMenu locale={locale} text={text} />
      </div>
    </header>
  )
}
