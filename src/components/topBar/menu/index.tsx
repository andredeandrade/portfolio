import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { MessageBundle } from '@/i18n/messages'

type TopBarMenuProps = {
  locale: Locale
  text: Pick<
    MessageBundle,
    'navProjects' | 'navTechnologies' | 'navAbout' | 'navContact'
  >
}

export function TopBarMenu({ locale, text }: TopBarMenuProps) {
  return (
    <nav className="hidden items-center gap-14 text-[1.1rem] font-medium text-[var(--topbar-text-soft)] lg:flex">
      <Link
        href={`/${locale}/about`}
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navAbout}
      </Link>
      <Link
        href={`/${locale}/#technologies`}
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navTechnologies}
      </Link>
      <Link
        href={`/${locale}/#projects`}
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navProjects}
      </Link>
      <Link
        href={`/${locale}/#contact`}
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navContact}
      </Link>
    </nav>
  )
}
