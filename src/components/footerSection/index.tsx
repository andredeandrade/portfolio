type FooterSectionProps = {
  text: string
  backToTopLabel: string
}

export function FooterSection({ text, backToTopLabel }: FooterSectionProps) {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[var(--topbar-border)] bg-[#081325] py-10 sm:py-12">
      <div className="container relative z-10">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <span aria-hidden="true" />

          <p className="text-center text-sm text-[var(--topbar-text-soft)]">
            {text}
          </p>

          <div className="flex justify-end">
            <a
              href="#top"
              aria-label={backToTopLabel}
              className="floating-top-arrow inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-100/40 bg-cyan-200/15 text-cyan-100 shadow-[0_14px_34px_rgba(3,10,20,0.45)] transition-colors hover:bg-cyan-200/25"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 15 6-6 6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
