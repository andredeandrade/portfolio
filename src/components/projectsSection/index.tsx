import type { MessageBundle } from '@/i18n/messages'
import { ProjectCarousel } from './projectCarousel'

type ProjectsSectionProps = {
  text: MessageBundle
}

type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  screenshots: string[]
  sourceUrl: string
  productionUrl: string
}

export function ProjectsSection({ text }: ProjectsSectionProps) {
  const projects: Project[] = [
    {
      title: text.projectCardTitle,
      type: text.projectCardType,
      description: text.projectCardDescription,
      screenshots: [
        '/ecommerce-dashboard.png',
        '/ecommerce-dashboard-2.png',
        '/ecommerce-dashboard-3.png',
        '/ecommerce-dashboard-4.png',
      ],
      stack: [
        'Next.js 16 (App Router)',
        'React 19',
        'TypeScript 5',
        'Prisma 7',
        'Supabase SSR',
        'Supabase JS',
        'Material UI 7',
        'Jest + Testing Library',
        'Docker',
      ],
      sourceUrl: 'https://github.com/andredeandrade/ecommerce-dashboard',
      productionUrl: 'https://ecommerce-dashboard-rho-seven.vercel.app/',
    },
  ]

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden border-b border-[var(--topbar-border)] bg-[#0f1d30] py-12 sm:py-16"
    >
      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(122,242,225,0.18),transparent_40%),radial-gradient(circle_at_82%_75%,rgba(65,132,255,0.22),transparent_45%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,30,51,0.3)_0%,rgba(14,27,45,0.08)_52%,rgba(9,20,35,0.45)_100%)]" />

      <div className="container relative z-10">
        <h2 className="text-center text-2xl font-semibold leading-tight text-white drop-shadow-[0_2px_14px_rgba(18,219,255,0.18)] sm:text-3xl lg:text-left lg:text-4xl">
          {text.projectsTitle}
        </h2>

        <p className="mt-3 text-center text-base font-medium text-cyan-100 sm:text-lg lg:text-left">
          {text.projectsLead}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-cyan-100/15 bg-[#0b1a2c]/80 shadow-[0_15px_40px_rgba(3,10,20,0.35)]"
            >
              <ProjectCarousel
                images={project.screenshots}
                title={project.title}
                type={project.type}
              />

              <div className="space-y-4 px-5 py-6 sm:px-6">
                <h3 className="text-2xl font-semibold text-cyan-100">
                  {project.title}
                </h3>

                <p className="text-base text-[var(--topbar-text-soft)]">
                  {project.description}
                </p>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200/85">
                    {text.projectStackLabel}
                  </p>

                  <ul
                    className="mt-3 flex flex-wrap gap-2"
                    aria-label={text.projectStackLabel}
                  >
                    {project.stack.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-full border border-cyan-100/20 bg-cyan-200/[0.07] px-3 py-1 text-sm font-medium text-cyan-100"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-20 items-center justify-center rounded-full border border-white/40 bg-[#243d5a] px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#2e4a6b] hover:text-white"
                    style={{ color: '#ffffff' }}
                  >
                    {text.projectSource}
                  </a>

                  <a
                    href={project.productionUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-w-20 items-center justify-center rounded-full border border-white/40 bg-transparent px-5 py-2.5 text-sm font-semibold text-white no-underline transition-colors hover:bg-white/[0.10] hover:text-white"
                    style={{ color: '#ffffff' }}
                  >
                    {text.projectLive}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
