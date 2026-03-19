import { notFound } from 'next/navigation'
import { HeroSection } from '@/components/heroSection'
import { TechnologiesSection } from '@/components/technologiesSection'
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

      <HeroSection text={text} />

      <TechnologiesSection text={text} />

      <section id="projects" className="container py-8">
        <div className="card p-8 text-[var(--color-muted)]">
          Projects section
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
