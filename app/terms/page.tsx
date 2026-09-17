import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Aeroin EduTech',
  description: 'Terms and conditions for Aeroin EduTech courses and services.',
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Terms &amp; Conditions</h1>
      <div className="prose prose-invert max-w-none space-y-6 text-slate-300">
        <Section title="1. Acceptance of Terms">
          By accessing and using the Aeroin EduTech website, you accept and agree to be bound
          by these Terms and Conditions. If you do not agree, please do not use our services.
        </Section>
        <Section title="2. Course Enrollment">
          Enrollment in any course is confirmed only upon successful completion of payment
          through Razorpay. The website does not store enrollment records or student data
          persistently. Payment processing is handled entirely by Razorpay.
        </Section>
        <Section title="3. Pricing">
          All course fees are listed in Indian Rupees (INR) and are inclusive of GST. The
          amount displayed at the time of enrollment is the final amount charged. No
          additional GST or hidden charges are applied.
        </Section>
        <Section title="4. Program Duration">
          Courses are offered in four duration options: 15 Days, 4 Weeks, 8 Weeks, and
          3 Months. The selected duration determines the program fee and the access period.
        </Section>
        <Section title="5. Payment Security">
          All payments are processed securely through Razorpay. Aeroin EduTech does not
          store credit card numbers, payment details, or transaction records locally.
          Payment verification is performed server-side using Razorpay&apos;s signature
          verification.
        </Section>
        <Section title="6. Course Content">
          Course content, curriculum and project details are provided for educational
          purposes. Learners are expected to adhere to academic integrity and not
          redistribute copyrighted materials.
        </Section>
        <Section title="7. Changes to Terms">
          Aeroin EduTech reserves the right to modify these Terms and Conditions at any
          time. Continued use of the website constitutes acceptance of the updated terms.
        </Section>
        <Section title="8. Contact">
          For questions regarding these Terms, please contact us at info@aeroinedutech.in
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
