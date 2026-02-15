import type { Metadata } from 'next'
import Markdown from 'react-markdown'
import { fetchLegalDocument } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for DMC Labs, LLC software applications.',
}

export default async function PrivacyPolicy() {
  const doc = await fetchLegalDocument('privacy.md')

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="animate-fade-in">
        <h1 className="font-serif text-3xl tracking-tight text-cream sm:text-4xl">
          {doc.title}
        </h1>
        <p className="mt-3 text-sm text-cream-muted">
          Last updated: {doc.lastUpdated}
        </p>
      </div>

      <div className="mt-12 rounded-lg bg-walnut/50 p-8 sm:p-10">
        <div className="legal-prose space-y-8 text-sm leading-relaxed text-cream/90">
          <Markdown>{doc.content}</Markdown>
        </div>
      </div>
    </div>
  )
}
