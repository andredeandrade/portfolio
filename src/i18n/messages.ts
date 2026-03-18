import type { Locale } from './config'

export const messages = {
  pt: {
    badge: 'Portfolio',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    navTechnologies: 'Tecnologias',
    navContact: 'Contato',
    heroGreeting: 'Prazer, eu sou',
    heroName: 'André Andrade',
    heroRole: 'Desenvolvedor Front-end',
    heroAbout:
      'Com 9 anos de experiência em desenvolvimento Front-End, atuo em diferentes tecnologias para criar produtos escaláveis, com forte domínio em React, Next.js e TypeScript e foco em performance, qualidade de código e experiência do usuário (UX).',
    title:
      'Desenvolvedor front-end focado em experiencias digitais claras e memoraveis.',
    description:
      'Base inicial pronta com tipografia, escala de espacamento, paleta, reset e container global. Agora e so plugar seus projetos, sua historia e contatos.',
    projectsCta: 'Ver projetos',
    contactCta: 'Falar comigo',
    localeSwitch: 'EN',
    switchToLight: 'Claro',
    switchToDark: 'Escuro',
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
  },
  en: {
    badge: 'Portfolio',
    navAbout: 'About',
    navProjects: 'Projects',
    navTechnologies: 'Technologies',
    navContact: 'Contact',
    heroGreeting: 'Hi, I am',
    heroName: 'André Andrade',
    heroRole: 'Front-end Developer',
    heroAbout:
      'With 9 years of Front-End development experience, I work across different technologies to build scalable products, with strong expertise in React, Next.js, and TypeScript, focused on performance, code quality, and user experience (UX).',
    title:
      'Front-end developer focused on clear, memorable digital experiences.',
    description:
      'Starter setup ready with typography, spacing scale, palette, reset, and a global container. Now you can plug in your projects, story, and contact details.',
    projectsCta: 'See projects',
    contactCta: 'Contact me',
    localeSwitch: 'PT',
    switchToLight: 'Light',
    switchToDark: 'Dark',
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
  },
} as const

export type MessageBundle = (typeof messages)[Locale]
