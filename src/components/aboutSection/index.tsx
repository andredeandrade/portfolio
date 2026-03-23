import type { Locale } from '@/i18n/config'

type AboutSectionProps = {
  locale: Locale
}

type ExperienceItem = {
  period: string
  title: string
  company: string
  location: string
  summary: string
  highlights: string[]
}

type Milestone = {
  year: string
  description: string
}

type Content = {
  title: string
  lead: string
  timelineTitle: string
  journeyTitle: string
  experiences: ExperienceItem[]
  milestones: Milestone[]
}

const contentByLocale: Record<Locale, Content> = {
  pt: {
    title: 'Sobre',
    lead: 'Desenvolvedor Front-End com 9 anos de experiência em aplicações web, especializado em React, Next.js e TypeScript. Atuação em produtos de e-commerce, sistemas escaláveis e bibliotecas de componentes, com foco em performance, qualidade de código e boas práticas. Experiência em ambientes ágeis, CI/CD e arquitetura front-end.',
    timelineTitle: 'Experiência profissional',
    journeyTitle: 'Linha da minha jornada',
    experiences: [
      {
        period: 'Ago/2021 - Ago/2025',
        title: 'Desenvolvedor Front-End',
        company: 'Moovin Plataforma de E-commerce',
        location: 'Porto Alegre, RS',
        summary:
          'Desenvolvimento de aplicações web modernas com React, Next.js e TypeScript, atuando desde a definição técnica até a entrega.',
        highlights: [
          'Implementação de funcionalidades com foco em performance, escalabilidade e reutilização de código',
          'Manutenção e evolução de sistemas com tipagem segura, otimização de renderização e Clean Code',
          'Participação ativa em times ágeis (Scrum e Kanban), com entregas contínuas e CI/CD',
        ],
      },
      {
        period: 'Fev/2020 - Ago/2021',
        title: 'Desenvolvedor de Sistemas',
        company: 'Nofaro',
        location: 'Porto Alegre, RS',
        summary:
          'Desenvolvimento e manutenção de sistemas internos utilizando Vue.js, Nuxt.js, PHP (Laravel) e SQL.',
        highlights: [
          'Implementação de novas funcionalidades com foco em estabilidade, usabilidade e escalabilidade',
          'Colaboração com equipes multidisciplinares em ciclos ágeis de desenvolvimento',
          'Atuação contínua na evolução técnica e na sustentação das aplicações',
        ],
      },
      {
        period: 'Dez/2017 - Dez/2019',
        title: 'Estagiário -> Desenvolvedor Front-End',
        company: 'Moovin Plataforma de E-commerce',
        location: 'Porto Alegre, RS',
        summary:
          'Desenvolvimento e manutenção de lojas virtuais com JavaScript, jQuery, PHP, HTML e CSS/Less.',
        highlights: [
          'Customização de layouts, correção de bugs e melhoria contínua da experiência do usuário',
          'Atuação em ambiente ágil com colaboração próxima com designers e desenvolvedores',
          'Evolução de estágio para desenvolvimento front-end com entregas de valor',
        ],
      },
    ],
    milestones: [
      {
        year: '2017',
        description:
          'Início na Moovin como estagiário de Front-End com foco em e-commerce.',
      },
      {
        year: '2019',
        description:
          'Efetivação de estagiário de Front-End para Desenvolvedor Front-End após evolução técnica no time.',
      },
      {
        year: '2020',
        description:
          'Entrada na startup Nofaro para atuar com Vue.js, Nuxt.js, Laravel e SQL.',
      },
      {
        year: '2021',
        description:
          'Retorno para a Moovin para atuar com React, Next.js e TypeScript.',
      },
      {
        year: '2025',
        description:
          'Conclusão do ciclo de 4 anos na Moovin com foco em performance e escalabilidade.',
      },
    ],
  },
  en: {
    title: 'About',
    lead: 'Front-end developer with 9 years of experience in web applications, specialized in React, Next.js, and TypeScript. Background includes e-commerce products, scalable systems, and component libraries, with a strong focus on performance, code quality, and engineering best practices. Experienced in agile environments, CI/CD, and front-end architecture.',
    timelineTitle: 'Professional experience',
    journeyTitle: 'Journey timeline',
    experiences: [
      {
        period: 'Aug/2021 - Aug/2025',
        title: 'Front-End Developer',
        company: 'Moovin E-commerce Platform',
        location: 'Porto Alegre, RS',
        summary:
          'Developed modern web applications with React, Next.js, and TypeScript, from technical definition to feature delivery.',
        highlights: [
          'Implemented features focused on performance, scalability, and code reuse',
          'Maintained and evolved systems with strong typing, rendering optimization, and Clean Code practices',
          'Actively worked in agile teams (Scrum and Kanban) with continuous delivery and CI/CD',
        ],
      },
      {
        period: 'Feb/2020 - Aug/2021',
        title: 'Systems Developer',
        company: 'Nofaro',
        location: 'Porto Alegre, RS',
        summary:
          'Developed and maintained internal systems using Vue.js, Nuxt.js, PHP (Laravel), and SQL.',
        highlights: [
          'Implemented new features focused on stability, usability, and scalability',
          'Collaborated with multidisciplinary teams in agile development cycles',
          'Continuously contributed to platform evolution and system reliability',
        ],
      },
      {
        period: 'Dec/2017 - Dec/2019',
        title: 'Intern -> Front-End Developer',
        company: 'Moovin E-commerce Platform',
        location: 'Porto Alegre, RS',
        summary:
          'Developed and maintained virtual stores with JavaScript, jQuery, PHP, HTML, and CSS/Less.',
        highlights: [
          'Customized layouts, fixed bugs, and continuously improved user experience',
          'Worked in agile environments with close collaboration with designers and developers',
          'Grew from internship to front-end development with consistent product delivery',
        ],
      },
    ],
    milestones: [
      {
        year: '2017',
        description:
          'Started at Moovin as a Front-End intern, focused on e-commerce development.',
      },
      {
        year: '2019',
        description:
          'Transitioned to Front-End Developer after technical growth in the team.',
      },
      {
        year: '2020',
        description:
          'Joined Nofaro, a startup, to work with Vue.js, Nuxt.js, Laravel, and SQL.',
      },
      {
        year: '2021',
        description:
          'Returned to Moovin to work with React, Next.js, and TypeScript.',
      },
      {
        year: '2025',
        description:
          'Completed a 4-year cycle at Moovin focused on performance and scalability.',
      },
    ],
  },
}

export function AboutSection({ locale }: AboutSectionProps) {
  const content = contentByLocale[locale]

  return (
    <section className="relative isolate overflow-hidden border-b border-[var(--topbar-border)] bg-[#09172b] py-14 sm:py-20">
      <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-cyan-400/18 blur-3xl" />
      <div className="absolute -right-16 bottom-8 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(122,242,225,0.16),transparent_40%),radial-gradient(circle_at_80%_72%,rgba(65,132,255,0.2),transparent_45%)]" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {content.title}
          </h1>
          <p className="mt-5 text-lg text-cyan-100/90 sm:text-xl">
            {content.lead}
          </p>
        </div>

        <div className="mt-16 space-y-14 sm:mt-20">
          <article>
            <h2 className="text-2xl font-semibold text-cyan-100 sm:text-3xl">
              {content.journeyTitle}
            </h2>

            <div className="mt-8 overflow-x-auto pb-1">
              <ol className="grid min-w-[920px] grid-cols-5 gap-8 lg:min-w-0">
                {content.milestones.map((milestone, index) => (
                  <li key={milestone.year} className="min-w-0">
                    <div className="flex items-center gap-3">
                      <p className="text-4xl font-semibold leading-none text-cyan-100">
                        {milestone.year}
                      </p>
                      {index !== content.milestones.length - 1 ? (
                        <span
                          aria-hidden="true"
                          className="mt-0.5 h-px flex-1 bg-cyan-100/25"
                        />
                      ) : null}
                    </div>

                    <p className="mt-4 text-[1.03rem] leading-relaxed text-cyan-100/90">
                      {milestone.description}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article>
            <h2 className="text-2xl font-semibold text-cyan-100 sm:text-3xl">
              {content.timelineTitle}
            </h2>

            <ol className="mt-8 space-y-5">
              {content.experiences.map((item) => (
                <li key={item.title}>
                  <article className="rounded-2xl border border-cyan-100/20 bg-[#0c2138]/85 p-5 shadow-[0_14px_38px_rgba(3,10,20,0.38)] sm:p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200/85">
                      {item.period}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-base text-cyan-100/80">
                      {item.company} | {item.location}
                    </p>

                    <p className="mt-4 text-base text-[var(--topbar-text-soft)]">
                      {item.summary}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-cyan-100/90 sm:text-base">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2.5">
                          <span className="mt-[0.42rem] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  )
}
