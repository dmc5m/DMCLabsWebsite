import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for DMC Labs, LLC software applications.',
}

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
      <div className="animate-fade-in">
        <h1 className="font-serif text-3xl tracking-tight text-cream sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-cream-muted">
          Last updated: February 15, 2026
        </p>
      </div>

      <div className="mt-12 rounded-lg bg-walnut/50 p-8 sm:p-10">
        <div className="space-y-8 text-sm leading-relaxed text-cream/90">
          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">1. Introduction</h2>
            <p>
              DMC Labs, LLC (&ldquo;DMC Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we
              collect, use, and protect your personal information when you use our software
              applications and services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">2. Information We Collect</h2>

            <h3 className="mb-2 text-sm font-medium text-cream">Account Information</h3>
            <p>
              When you sign in through a third-party authentication provider (such as Google), we
              receive your name and email address.
            </p>

            <h3 className="mb-2 mt-4 text-sm font-medium text-cream">Financial Data</h3>
            <p>
              Certain applications allow you to upload financial transaction data (such as CSV bank
              statements) or connect financial accounts through third-party services. This data may
              include transaction dates, amounts, and descriptions.
            </p>

            <h3 className="mb-2 mt-4 text-sm font-medium text-cream">Usage Data</h3>
            <p>
              We may collect basic usage information such as pages visited and features used to
              improve our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-cream/80">
              <li>Provide and maintain our services</li>
              <li>Authenticate your identity</li>
              <li>Display your financial data within our applications</li>
              <li>Improve and develop our services</li>
              <li>Communicate with you about your account</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">4. Data Storage & Security</h2>
            <p>
              Your data is stored securely using Supabase, which provides encryption at rest and in
              transit. We implement row-level security policies to ensure that your data is only
              accessible to you. We do not sell, rent, or share your personal data with third
              parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">5. Third-Party Services</h2>
            <p>Our applications may use the following third-party services:</p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-cream/80">
              <li>
                <strong className="text-cream">Google</strong> &mdash; Authentication (OAuth)
              </li>
              <li>
                <strong className="text-cream">Supabase</strong> &mdash; Database and
                authentication infrastructure
              </li>
              <li>
                <strong className="text-cream">Vercel</strong> &mdash; Application hosting
              </li>
            </ul>
            <p className="mt-2">
              Each of these services has its own privacy policy governing how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">6. Children&apos;s Privacy</h2>
            <p>
              Some of our applications are designed to be used by families, including features
              accessible to children. We do not knowingly collect personal information directly from
              children under 13. Children&apos;s accounts and data are created and managed by their
              parent or guardian. Parents may request access to or deletion of their child&apos;s
              data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">7. Data Retention</h2>
            <p>
              We retain your data for as long as your account is active or as needed to provide
              services. You may request deletion of your account and associated data at any time by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-2 ml-4 list-disc space-y-1 text-cream/80">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data in a portable format</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us at the email address below.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify users of material
              changes by updating the &ldquo;Last updated&rdquo; date. Continued use of our
              services after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-serif text-lg text-cream">10. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise your data rights,
              please contact us at{' '}
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
