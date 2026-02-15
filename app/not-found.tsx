import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6">
      <div className="animate-fade-in text-center">
        <p className="text-sm tracking-widest text-cream-muted uppercase">404</p>
        <h1 className="mt-4 font-serif text-3xl tracking-tight text-cream sm:text-4xl">
          Page not found
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-taupe/40" />
        <p className="mt-6 text-sm text-cream-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block text-sm tracking-wide text-gold transition-opacity hover:opacity-80"
        >
          &larr; Back to home
        </Link>
      </div>
    </div>
  )
}
