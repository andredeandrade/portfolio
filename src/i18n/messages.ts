import type { Locale } from './config'

export const messages = {
  pt: {
    badge: 'Portfolio',
    navAbout: 'Sobre',
    navProjects: 'Projetos',
    navTechnologies: 'Tecnologias',
    navContact: 'Contato',
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
