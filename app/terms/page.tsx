import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for DMC Labs, LLC software applications.',
}

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="animate-fade-in">
        <h1 className="font-serif text-3xl tracking-tight text-cream sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-cream-muted">
          Last updated: February 15, 2026
        </p>
      </div>

      <div className="mt-12 rounded-lg bg-walnut/50 p-8 sm:p-10">
        <div className="space-y-8 text-sm leading-relaxed text-cream/90">
          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">1. Agreement to Terms</h2>
            <p>
              By accessing or using any software application or service provided by DMC Labs, LLC
              (&ldquo;DMC Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;),
              you agree to be bound by these Terms of Service. If you do not agree to these terms,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">2. Description of Services</h2>
            <p>
              DMC Labs provides software applications including but not limited to financial
              dashboards, educational tools, and related services. Our applications are provided for
              personal, non-commercial use unless otherwise specified.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">3. User Accounts</h2>
            <p>
              Some of our services require authentication through third-party providers (such as
              Google). You are responsible for maintaining the security of your account credentials
              and for all activities that occur under your account.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-cream/80">
              <li>Provide accurate information when using our services</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not attempt to interfere with or disrupt our services</li>
              <li>Not attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">5. Financial Data</h2>
            <p>
              Certain applications may allow you to upload or connect financial data. You
              acknowledge that you are solely responsible for the accuracy of any financial
              information you provide. DMC Labs does not provide financial advice and is not a
              financial institution.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">6. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services are owned by DMC Labs, LLC
              and are protected by applicable intellectual property laws. You may not copy, modify,
              or distribute our software without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">7. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, DMC Labs, LLC shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages arising from your
              use of our services. Our total liability shall not exceed the amount you have paid us
              in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">8. Disclaimer of Warranties</h2>
            <p>
              Our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
              warranties of any kind, either express or implied, including but not limited to
              implied warranties of merchantability, fitness for a particular purpose, and
              non-infringement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">9. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time,
              with or without cause. Upon termination, your right to use our services will
              immediately cease.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">10. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. We will notify users of material changes
              by updating the &ldquo;Last updated&rdquo; date. Continued use of our services after
              changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">11. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of the
              State of Florida, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">12. Contact</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at{' '}
              <a
                href="mailto:contact@dmclabs.one"
                className="text-gold transition-opacity hover:opacity-80"
              >
                contact@dmclabs.one
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
