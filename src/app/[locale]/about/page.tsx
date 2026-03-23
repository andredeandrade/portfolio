import { notFound } from 'next/navigation'
import { TopBar } from '@/components/topBar'
import { AboutSection } from '@/components/aboutSection'
import { ContactSection } from '@/components/contactSection'
import { FooterSection } from '@/components/footerSection'
import { isLocale, locales, type Locale } from '@/i18n/config'
import { messages } from '@/i18n/messages'

type PageProps = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params

  if (!isLocale(locale)) {
    notFound()
  }

  const text = messages[locale]
  const year = new Date().getFullYear()
  const footerText = text.footerRights.replace('{year}', String(year))

  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <TopBar locale={locale as Locale} text={text} />

      <AboutSection locale={locale as Locale} />

      <ContactSection text={text} />

      <FooterSection text={footerText} backToTopLabel={text.footerBackToTop} />
    </main>
  )
}
