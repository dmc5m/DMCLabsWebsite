'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-40">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 sm:px-8 sm:py-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-cream transition-opacity hover:opacity-80"
        >
          DMC Labs
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-widest text-cream-muted uppercase transition-colors duration-300 hover:text-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="text-cream-muted transition-colors hover:text-cream sm:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="absolute inset-x-0 top-full z-50 border-t border-taupe/20 bg-walnut/95 backdrop-blur-sm sm:hidden">
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm tracking-widest text-cream-muted uppercase transition-colors hover:text-cream"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
