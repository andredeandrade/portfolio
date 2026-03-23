'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Locale } from '@/i18n/config'
import type { MessageBundle } from '@/i18n/messages'
import { LocaleToggle } from '@/components/topBar/localeToggle'
import { SocialLinks } from '@/components/topBar/socialLinks'

type MobileMenuProps = {
  locale: Locale
  text: MessageBundle
}

export function MobileMenu({ locale, text }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Hamburger button — hidden on desktop */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={text.menuOpen}
        className="grid h-10 w-10 place-items-center rounded-md text-[var(--topbar-text)] transition-colors hover:bg-[var(--topbar-hover)] lg:hidden"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col text-[var(--topbar-text)]"
          style={{ background: 'var(--topbar-bg)' }}
        >
          {/* Top row: logo + close button */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-[var(--topbar-border)] px-6">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-2 text-xl font-medium"
              onClick={() => setOpen(false)}
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

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={text.menuClose}
              className="grid h-10 w-10 place-items-center rounded-md transition-colors hover:bg-[var(--topbar-hover)]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {(
              [
                { href: '#about', label: text.navAbout },
                { href: '#projects', label: text.navProjects },
                { href: '#technologies', label: text.navTechnologies },
                { href: '#contact', label: text.navContact },
              ] as const
            ).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-4xl font-semibold text-[var(--topbar-text-soft)] transition-colors hover:text-[var(--topbar-text)]"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Footer: socials + controls */}
          <div className="flex shrink-0 items-center justify-between border-t border-[var(--topbar-border)] px-6 py-5">
            <div className="flex items-center gap-1">
              <SocialLinks text={text} />
            </div>
            <div className="flex items-center">
              <LocaleToggle locale={locale} label={text.localeSwitch} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
