import type { MessageBundle } from '@/i18n/messages'

type TopBarMenuProps = {
  text: Pick<
    MessageBundle,
    'navProjects' | 'navTechnologies' | 'navAbout' | 'navContact'
  >
}

export function TopBarMenu({ text }: TopBarMenuProps) {
  return (
    <nav className="hidden items-center gap-14 text-[1.1rem] font-medium text-[var(--topbar-text-soft)] lg:flex">
      <a
        href="#about"
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navAbout}
      </a>
      <a
        href="#technologies"
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navTechnologies}
      </a>
      <a
        href="#projects"
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navProjects}
      </a>
      <a
        href="#contact"
        className="transition-colors hover:text-[var(--topbar-text)]"
      >
        {text.navContact}
      </a>
    </nav>
  )
}
