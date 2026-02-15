import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-taupe/10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-xs tracking-wide text-cream-muted">
          &copy; {new Date().getFullYear()} DMC Labs, LLC &middot; Florida
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {[
              { href: '/terms', label: 'Terms' },
              { href: '/privacy', label: 'Privacy' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs tracking-widest text-cream-muted uppercase transition-colors duration-300 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
