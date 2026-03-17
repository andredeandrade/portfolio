import { notFound } from 'next/navigation'
import { TopBar } from '@/components/topBar'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { messages } from '@/i18n/messages'

type PageProps = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleHomePage({ params }: PageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const text = messages[locale]

  return (
    <main className="relative min-h-screen overflow-hidden">
      <TopBar locale={locale as Locale} text={text} />

      <section className="container py-16" id="about">
        <div className="card p-8 sm:p-12">
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            {text.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-[var(--color-muted)]">
            {text.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-strong)]"
            >
              {text.projectsCta}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold"
            >
              {text.contactCta}
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="container py-8">
        <div className="card p-8 text-[var(--color-muted)]">
          Projects section
        </div>
      </section>

      <section id="technologies" className="container py-8">
        <div className="card p-8 text-[var(--color-muted)]">
          Technologies section
        </div>
      </section>

      <section id="contact" className="container py-8 pb-16">
        <div className="card p-8 text-[var(--color-muted)]">
          Contact section
        </div>
      </section>
    </main>
  )
}
