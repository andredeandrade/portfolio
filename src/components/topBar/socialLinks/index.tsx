import type { MessageBundle } from '@/i18n/messages'

type SocialLinksProps = {
  text: Pick<
    MessageBundle,
    'socialGithub' | 'socialLinkedin' | 'contactWhatsapp'
  >
}

export function SocialLinks({ text }: SocialLinksProps) {
  return (
    <>
      <a
        href="https://github.com/andredeandrade"
        target="_blank"
        rel="noreferrer"
        aria-label={text.socialGithub}
        className="rounded-md p-2 text-[var(--topbar-text-soft)] transition-colors hover:bg-[var(--topbar-hover)] hover:text-[var(--topbar-text)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.61.07-.61 1 .07 1.52 1.03 1.52 1.03.88 1.52 2.31 1.08 2.87.83.09-.65.34-1.08.62-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.35.3.66.9.66 1.82v2.69c0 .27.18.58.69.48A10 10 0 0 0 12 2" />
        </svg>
      </a>

      <a
        href="https://www.linkedin.com/in/andré-andrade-8bb9a8177"
        target="_blank"
        rel="noreferrer"
        aria-label={text.socialLinkedin}
        className="rounded-md p-2 text-[var(--topbar-text-soft)] transition-colors hover:bg-[var(--topbar-hover)] hover:text-[var(--topbar-text)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.37a1.56 1.56 0 0 1 0 3.12M5.56 9.75h2.76v8.68H5.56zm4.42 0h2.64v1.18h.04c.37-.7 1.27-1.44 2.62-1.44 2.8 0 3.32 1.84 3.32 4.24v4.7h-2.75v-4.17c0-1 0-2.28-1.4-2.28s-1.61 1.08-1.61 2.2v4.25H9.98z" />
        </svg>
      </a>

      <a
        href="https://wa.me/5551989353301"
        target="_blank"
        rel="noreferrer"
        aria-label={text.contactWhatsapp}
        className="rounded-md p-2 text-[var(--topbar-text-soft)] transition-colors hover:bg-[var(--topbar-hover)] hover:text-[var(--topbar-text)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M12.02 2a9.95 9.95 0 0 0-8.5 15.14L2 22l5.03-1.48A10 10 0 1 0 12.02 2m5.77 14.37c-.24.66-1.4 1.26-1.93 1.34-.5.07-1.13.1-1.82-.12-.42-.13-.95-.31-1.64-.6-2.88-1.25-4.75-4.16-4.9-4.36-.14-.2-1.16-1.55-1.16-2.95s.73-2.08 1-2.36a1.1 1.1 0 0 1 .8-.38h.58c.19 0 .45-.07.7.53.24.6.8 2.08.87 2.23.07.14.12.31.02.5-.1.2-.14.31-.29.48-.14.17-.3.38-.42.5-.14.14-.29.3-.12.58.16.28.73 1.21 1.57 1.95 1.07.95 1.98 1.25 2.27 1.4.29.14.46.12.63-.07.17-.2.73-.85.93-1.14.2-.29.4-.24.66-.14.27.1 1.69.8 1.98.95.28.14.48.22.55.34.07.13.07.75-.17 1.42" />
        </svg>
      </a>
    </>
  )
}
