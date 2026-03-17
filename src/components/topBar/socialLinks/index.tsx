import type { MessageBundle } from '@/i18n/messages'

type SocialLinksProps = {
  text: Pick<MessageBundle, 'socialGithub' | 'socialLinkedin' | 'socialEmail'>
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
        href="mailto:andre@andrade.inf.br"
        aria-label={text.socialEmail}
        className="rounded-md p-2 text-[var(--topbar-text-soft)] transition-colors hover:bg-[var(--topbar-hover)] hover:text-[var(--topbar-text)]"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m0 2v.5l8 4.5 8-4.5V8l-8 4.5L4 8" />
        </svg>
      </a>
    </>
  )
}
