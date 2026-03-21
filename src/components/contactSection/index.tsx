import type { MessageBundle } from '@/i18n/messages'

type ContactSectionProps = {
  text: MessageBundle
}

type ContactLink = {
  href: string
  label: string
  icon: 'email' | 'whatsapp' | 'linkedin'
}

function ContactIcon({ icon }: { icon: ContactLink['icon'] }) {
  const base = 'h-6 w-6 fill-current'

  switch (icon) {
    case 'email':
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
          <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m0 2v.5l8 4.5 8-4.5V8l-8 4.5L4 8" />
        </svg>
      )

    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
          <path d="M12.02 2a9.95 9.95 0 0 0-8.5 15.14L2 22l5.03-1.48A10 10 0 1 0 12.02 2m5.77 14.37c-.24.66-1.4 1.26-1.93 1.34-.5.07-1.13.1-1.82-.12-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.75-4.16-4.9-4.36-.14-.2-1.16-1.55-1.16-2.95s.73-2.08 1-2.36a1.1 1.1 0 0 1 .8-.38h.58c.19 0 .45-.07.7.53.24.6.8 2.08.87 2.23.07.14.12.31.02.5-.1.2-.14.31-.29.48-.14.17-.3.38-.42.5-.14.14-.29.3-.12.58.16.28.73 1.21 1.57 1.95 1.07.95 1.98 1.25 2.27 1.4.29.14.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.4-.24.66-.14.27.1 1.69.8 1.98.95.28.14.48.22.55.34.07.13.07.75-.17 1.42" />
        </svg>
      )

    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.37a1.56 1.56 0 0 1 0 3.12M5.56 9.75h2.76v8.68H5.56zm4.42 0h2.64v1.18h.04c.37-.7 1.27-1.44 2.62-1.44 2.8 0 3.32 1.84 3.32 4.24v4.7h-2.75v-4.17c0-1 0-2.28-1.4-2.28s-1.61 1.08-1.61 2.2v4.25H9.98z" />
        </svg>
      )

    default:
      return null
  }
}

function SupportIcon() {
  return (
    <svg
      viewBox="0 0 96 96"
      className="h-26 w-26 text-cyan-50 sm:h-28 sm:w-28"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="48" cy="34" r="12" />
      <path d="M31 69v-10c0-7.18 5.82-13 13-13h8c7.18 0 13 5.82 13 13v10" />
      <path d="M29 45h-5a6 6 0 0 0-6 6v7" />
      <path d="M67 45h5a6 6 0 0 1 6 6v7" />
      <rect x="58" y="18" width="25" height="16" rx="3" />
      <path d="m64 34-2 5 6-5" />
      <path d="M64 25h4M72 25h4M64 29h12" />
    </svg>
  )
}

export function ContactSection({ text }: ContactSectionProps) {
  const links: ContactLink[] = [
    {
      href: 'mailto:andre@andrade.inf.br',
      label: text.socialEmail,
      icon: 'email',
    },
    {
      href: 'https://wa.me/5551989353301',
      label: text.contactWhatsapp,
      icon: 'whatsapp',
    },
    {
      href: 'https://www.linkedin.com/in/andré-andrade-8bb9a8177',
      label: text.socialLinkedin,
      icon: 'linkedin',
    },
  ]

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#09172b] py-16 sm:py-20"
    >
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/22 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_24%,rgba(122,242,225,0.14),transparent_42%),radial-gradient(circle_at_76%_80%,rgba(65,132,255,0.18),transparent_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(7,22,39,0.3)_0%,rgba(8,23,40,0.08)_48%,rgba(6,17,31,0.42)_100%)]" />

      <div className="container relative z-10 text-center">
        <div className="mx-auto mb-6 grid h-32 w-32 place-items-center rounded-full border border-cyan-100/20 bg-cyan-100/[0.04] shadow-[0_10px_32px_rgba(7,16,31,0.35)]">
          <SupportIcon />
        </div>

        <h2 className="text-4xl font-semibold leading-tight text-white drop-shadow-[0_2px_14px_rgba(18,219,255,0.12)] sm:text-5xl">
          {text.contactTitle}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-cyan-100/90 sm:text-xl">
          {text.contactLead}
        </p>

        <ul className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {links.map((link) => (
            <li key={link.icon}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                aria-label={link.label}
                className="grid h-12 w-12 place-items-center rounded-md border border-cyan-100/35 bg-[#2eb2eb] text-white shadow-[0_10px_24px_rgba(8,28,48,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#39bff5]"
              >
                <ContactIcon icon={link.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
