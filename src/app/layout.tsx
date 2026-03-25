import type { Metadata } from 'next'
import { Fira_Code, Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})

const firaCode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ['latin'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://andredeandrade.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'André Andrade | Desenvolvedor Front-End',
    template: '%s | André Andrade',
  },
  description:
    'Desenvolvedor Front-End com 9 anos de experiência em React, Next.js e TypeScript. Especializado em e-commerce, plataformas escaláveis e bibliotecas de componentes, com foco em performance, qualidade de código e UX.',
  keywords: [
    'Desenvolvedor Front-End',
    'Front-end Developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'Vue.js',
    'Nuxt.js',
    'E-commerce',
    'Web Development',
    'Performance',
    'Porto Alegre',
    'André Andrade',
  ],
  authors: [
    { name: 'André Andrade', url: 'https://github.com/andredeandrade' },
  ],
  creator: 'André Andrade',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    url: siteUrl,
    siteName: 'André Andrade | Portfolio',
    title: 'André Andrade | Desenvolvedor Front-End',
    description:
      'Desenvolvedor Front-End com 9 anos de experiência em React, Next.js e TypeScript. Especializado em e-commerce, plataformas escaláveis e bibliotecas de componentes, com foco em performance, qualidade de código e UX.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'André Andrade | Desenvolvedor Front-End',
    description:
      'Desenvolvedor Front-End com 9 anos de experiência em React, Next.js e TypeScript. Especializado em e-commerce, plataformas escaláveis e bibliotecas de componentes, com foco em performance, qualidade de código e UX.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'pt-BR': `${siteUrl}/pt`,
      'en-US': `${siteUrl}/en`,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} antialiased`}
      >
        <div className="site-shell">{children}</div>
      </body>
    </html>
  )
}
