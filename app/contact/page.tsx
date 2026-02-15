import type { Metadata } from 'next'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with DMC Labs, LLC.',
}

export default function Contact() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="animate-fade-in text-center">
        <h1 className="font-serif text-3xl tracking-tight text-cream sm:text-4xl">
          Contact
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-taupe/40" />
        <p className="mt-6 text-sm leading-relaxed text-cream-muted">
          Questions, concerns, or data requests?
        </p>
        <a
          href="mailto:contact@dmclabs.one"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-walnut/60 px-6 py-3 text-sm tracking-wide text-cream transition-colors duration-300 hover:bg-taupe/40"
        >
          <Mail size={16} className="text-cream-muted" />
          contact@dmclabs.one
        </a>
      </div>
    </div>
  )
}
