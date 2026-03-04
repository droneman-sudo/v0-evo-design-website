export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-xl font-bold tracking-wide text-primary-foreground">
              EVO DESIGN
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/50">
              And Constructions
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-gold"
                >
                  {link}
                </a>
              )
            )}
          </nav>

          {/* Info */}
          <div className="text-center md:text-right">
            <a
              href="https://www.evodesignandconstructions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary-foreground/60 hover:text-gold transition-colors"
            >
              www.evodesignandconstructions.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            {'Evo Design & Constructions. Madathil, Iritty, Kerala.'}
          </p>
        </div>
      </div>
    </footer>
  )
}
