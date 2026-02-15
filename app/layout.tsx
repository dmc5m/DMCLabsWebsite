import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'DMC Labs, LLC',
    template: '%s | DMC Labs, LLC',
  },
  description: 'Software, thoughtfully crafted.',
  metadataBase: new URL('https://dmclabs.one'),
  openGraph: {
    title: 'DMC Labs, LLC',
    description: 'Software, thoughtfully crafted.',
    url: 'https://dmclabs.one',
    siteName: 'DMC Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'DMC Labs, LLC',
    description: 'Software, thoughtfully crafted.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-charcoal font-sans text-cream antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
