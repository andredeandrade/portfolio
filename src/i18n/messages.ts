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
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
    techTitle: 'Tecnologias e ferramentas',
    techLead:
      'Atuo no desenvolvimento de aplicações web para e-commerce, plataformas escaláveis e bibliotecas de componentes, com foco em performance, qualidade de código, boas práticas, arquitetura front-end e CI/CD em ambientes ágeis.',
    techStackIntro:
      'Stack com a qual trabalho com domínio técnico e experiência de implementação real.',
    projectsTitle: 'Projetos em destaque',
    projectsLead:
      'Uma seleção de trabalhos recentes com foco em UX, performance e código limpo.',
    projectCardTitle: 'E-commerce Dashboard',
    projectCardType: 'Web application',
    projectCardDescription:
      'Dashboard de e-commerce com análises de vendas, gerenciamento de catálogo e operações, construído com arquitetura moderna e foco em escalabilidade.',
    projectStackLabel: 'Stack',
    projectSource: 'Source',
    projectLive: 'Demo',
    contactTitle: 'Contato',
    contactLead: 'Fique à vontade para entrar em contato para qualquer dúvida!',
    contactWhatsapp: 'WhatsApp',
    footerRights: '© {year} Andre Andrade. Todos os direitos reservados.',
    footerBackToTop: 'Voltar ao topo',
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
    socialGithub: 'GitHub',
    socialLinkedin: 'LinkedIn',
    socialEmail: 'Email',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    techTitle: 'Technologies and tools',
    techLead:
      'I build web applications for e-commerce, scalable platforms, and component libraries, with focus on performance, code quality, best practices, front-end architecture, and CI/CD in agile teams.',
    techStackIntro:
      'Where I have strong command and hands-on experience in real projects.',
    projectsTitle: 'Featured projects',
    projectsLead:
      'A selection of recent work focused on UX, performance, and clean code.',
    projectCardTitle: 'E-commerce Dashboard',
    projectCardType: 'Web application',
    projectCardDescription:
      'An e-commerce dashboard for sales analytics, catalog management, and operations, built with a modern architecture focused on scalability.',
    projectStackLabel: 'Stack',
    projectSource: 'Source',
    projectLive: 'Demo',
    contactTitle: 'Contact',
    contactLead: 'Feel free to contact me for any kind of query!',
    contactWhatsapp: 'WhatsApp',
    footerRights: '© {year} Andre Andrade. All rights reserved.',
    footerBackToTop: 'Back to top',
  },
} as const

export type MessageBundle = (typeof messages)[Locale]
