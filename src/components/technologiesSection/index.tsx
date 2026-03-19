import type { MessageBundle } from '@/i18n/messages'

type TechnologiesSectionProps = {
  text: MessageBundle
}

type Technology = {
  name: string
}

const technologies: Technology[] = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Vue.js' },
  { name: 'Nuxt.js' },
  { name: 'PHP Laravel' },
  { name: 'SQL' },
  { name: 'Docker' },
  { name: 'HTML' },
  { name: 'CSS / Less' },
  { name: 'Material UI' },
]

function TechnologyIcon({ name }: { name: string }) {
  const base =
    'h-7 w-7 text-cyan-300 transition-colors group-hover:text-cyan-100'

  switch (name) {
    case 'JavaScript':
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="2"
            fill="currentColor"
            opacity="0.9"
          />
          <text
            x="12"
            y="15.8"
            textAnchor="middle"
            fontSize="8.8"
            fontWeight="700"
            fill="#0b2136"
          >
            JS
          </text>
        </svg>
      )

    case 'TypeScript':
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden="true">
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="2"
            fill="currentColor"
            opacity="0.9"
          />
          <text
            x="12"
            y="15.8"
            textAnchor="middle"
            fontSize="8"
            fontWeight="700"
            fill="#0b2136"
          >
            TS
          </text>
        </svg>
      )

    case 'React':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="1.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.8"
            transform="rotate(-60 12 12)"
          />
        </svg>
      )

    case 'Next.js':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M8 15V8.9l7.8 6" />
          <path d="M15.6 8.7v6.4" />
          <path d="M15.7 8.7 8.3 15.3" />
        </svg>
      )

    case 'Vue.js':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.5 5h4.4L12 13.2 17.1 5h4.4L12 20.2Z" opacity="0.95" />
          <path d="M6.8 5 12 13.3 17.2 5h-2.8L12 9 9.6 5Z" opacity="0.55" />
        </svg>
      )

    case 'Nuxt.js':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M2.7 18 8.2 8.8 13.7 18Z" opacity="0.95" />
          <path d="M9.2 18 14.2 10.8 21.3 18Z" opacity="0.8" />
          <path d="M12.5 18a1.7 1.7 0 0 1 3.4 0" opacity="0.55" />
        </svg>
      )

    case 'PHP Laravel':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 8.5 9.4 5.5l5.2 3-5.3 3Z" />
          <path d="M9.4 11.5v6L4 14.5v-6" />
          <path d="M9.4 11.5 14.6 8.5v6l-5.2 3" />
          <path d="M14.6 10.5 20 7.5v6l-5.4 3" />
          <path d="M14.6 14.5 20 11.5" />
        </svg>
      )

    case 'SQL':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <ellipse cx="12" cy="6.5" rx="7" ry="3" />
          <path d="M5 6.5v8c0 1.6 3.1 3 7 3s7-1.4 7-3v-8" />
          <path d="M5 10.5c0 1.6 3.1 3 7 3s7-1.4 7-3" />
        </svg>
      )

    case 'Docker':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="4" height="3" />
          <rect x="8" y="11" width="4" height="3" />
          <rect x="13" y="11" width="4" height="3" />
          <rect x="8" y="7" width="4" height="3" />
          <rect x="13" y="7" width="4" height="3" />
          <path d="M3 15h15c-.4 2.5-2.3 4-5 4H8.5C6 19 4.1 17.5 3.6 15.2" />
          <path d="M20 12.6c.8-.2 1.4 0 1.9.5-.4 1.6-1.4 2.3-3 2.1" />
        </svg>
      )

    case 'HTML':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 4h12l-1.2 13L12 20l-4.8-3L6 4Z" />
          <path d="m9 10 2 2-2 2M15 10l-2 2 2 2" />
        </svg>
      )

    case 'CSS / Less':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 4h12l-1.2 13L12 20l-4.8-3L6 4Z" />
          <path d="M9.2 9.5h5.6M8.8 13h6.2M9.6 16h4.8" />
        </svg>
      )

    case 'Material UI':
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M3 17V7.2l4.5 4.2L12 7.2l4.5 4.2L21 7.2V17h-2V11.7l-2.5 2.3L12 9.8 7.5 14 5 11.7V17Z" />
          <path d="M10.9 12.2h2.2V17h-2.2Z" opacity="0.55" />
        </svg>
      )

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          className={base}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h16" />
        </svg>
      )
  }
}

export function TechnologiesSection({ text }: TechnologiesSectionProps) {
  return (
    <section
      id="technologies"
      className="relative isolate overflow-hidden border-b border-[var(--topbar-border)] bg-[#111f31] py-12 sm:py-16"
    >
      <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-20 bottom-6 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(122,242,225,0.18),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(65,132,255,0.2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(12,32,54,0.3)_0%,rgba(15,29,48,0.08)_50%,rgba(10,22,38,0.4)_100%)]" />

      <div className="container relative z-10">
        <h2 className="text-center text-2xl font-semibold leading-tight text-white drop-shadow-[0_2px_14px_rgba(18,219,255,0.18)] sm:text-3xl lg:text-left lg:text-4xl">
          {text.techTitle}
        </h2>

        <p className="mt-3 text-center text-base font-medium text-cyan-100 sm:text-lg lg:text-left">
          {text.techStackIntro}
        </p>

        <ul
          className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4"
          aria-label={text.navTechnologies}
        >
          {technologies.map((technology) => (
            <li
              key={technology.name}
              className="group flex items-center gap-3 rounded-lg border border-cyan-100/10 bg-cyan-200/[0.03] px-3 py-2 text-[var(--topbar-text)] transition-colors hover:border-cyan-200/40 hover:bg-cyan-200/[0.08]"
            >
              <span className="grid h-9 min-w-9 shrink-0 place-items-center">
                <TechnologyIcon name={technology.name} />
              </span>
              <span className="text-base font-medium sm:text-lg">
                {technology.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
