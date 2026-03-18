import Image from 'next/image'
import type { MessageBundle } from '@/i18n/messages'

type HeroSectionProps = {
  text: MessageBundle
}

export function HeroSection({ text }: HeroSectionProps) {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-[var(--topbar-border)] bg-[#0f1d30] py-14 sm:py-20"
      id="about"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-16 bottom-6 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-200/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(122,242,225,0.18),transparent_38%),radial-gradient(circle_at_75%_70%,rgba(65,132,255,0.2),transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,32,54,0.25)_0%,rgba(15,29,48,0.05)_45%,rgba(10,22,38,0.35)_100%)]" />

      <div className="container relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="flex flex-col gap-3 text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
            {text.heroGreeting}
          </p>

          <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-[0_2px_16px_rgba(18,219,255,0.18)] sm:text-5xl lg:text-6xl">
            {text.heroName}
          </h1>

          <p className="text-lg font-semibold text-cyan-100 sm:text-xl">
            {text.heroRole}
          </p>

          <p className="mx-auto max-w-xl text-base text-[var(--topbar-text-soft)] sm:text-lg lg:mx-0">
            {text.heroAbout}
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4 sm:pt-4 lg:justify-start">
            <a
              href="#contact"
              className="rounded-full border border-cyan-100/60 bg-cyan-300 px-8 py-3 text-sm font-bold text-[#071526] shadow-[0_8px_30px_rgba(42,222,255,0.35)] transition-all hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_12px_34px_rgba(62,233,255,0.45)]"
            >
              {text.navContact}
            </a>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 scale-95 rounded-full bg-cyan-300/20 blur-3xl" />
          <Image
            src="/hero-illustration.svg"
            width={720}
            height={560}
            alt={text.heroRole}
            className="relative mx-auto w-full max-w-xl"
            priority
          />

          <div className="relative -mt-20 text-center xl:-mt-24">
            <a
              href="https://storyset.com/technology"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-cyan-100/80 underline decoration-cyan-200/70 underline-offset-2 hover:text-cyan-100"
            >
              Technology illustrations by Storyset
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
