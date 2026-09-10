import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Aeroin EduTech',
  description: 'Privacy policy for Aeroin EduTech courses and services.',
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Privacy Policy</h1>
      <div className="space-y-6">
        <Section title="1. Overview">
          Aeroin EduTech is committed to protecting your privacy. This Privacy Policy explains
          how we handle information when you use our website. We do not maintain a database of
          user accounts, student records, or enrollment data.
        </Section>
        <Section title="2. No Persistent Data Storage">
          This website does not store student names, phone numbers, email addresses,
          institution details, enrollment records, or payment records in any local database.
          The website is designed to facilitate course discovery and payment only.
        </Section>
        <Section title="3. Payment Information">
          All payment transactions are processed by Razorpay, our third-party payment gateway.
          Aeroin EduTech does not collect, store, or process credit card numbers or other
          payment credentials. Payment-related information is handled solely by Razorpay
          in accordance with their privacy policy and security standards.
        </Section>
        <Section title="4. Contact Form">
          The contact form on this website does not store submissions in a database. When you
          submit the form, it opens your email client with the message pre-filled to be sent
          to our email address. No data is retained on our servers.
        </Section>
        <Section title="5. Cookies and Analytics">
          The website may use essential cookies for functionality. We do not use cookies to
          track or store personal information persistently.
        </Section>
        <Section title="6. Third-Party Services">
          We use Razorpay for payment processing. Please refer to Razorpay&apos;s privacy
          policy for information on how they handle payment data.
        </Section>
        <Section title="7. Contact">
          For privacy-related questions, please contact us at info@aeroinedutech.in
          or +91 9176209914.
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-white">{title}</h2>
      <p className="text-sm leading-relaxed text-slate-400">{children}</p>
    </div>
  );
}
