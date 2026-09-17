import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | Aeroin EduTech',
  description: 'Refund policy for Aeroin EduTech courses and services.',
};

export default function RefundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-white">Refund Policy</h1>
      <div className="space-y-6">
        <Section title="1. General Policy">
          All payments made to Aeroin EduTech are processed through Razorpay. Due to the
          nature of our educational programs, refund requests are subject to the terms
          outlined below.
        </Section>
        <Section title="2. Refund Eligibility">
          Refund requests may be considered under the following circumstances:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Duplicate payment for the same course and duration.</li>
            <li>Payment failure where the amount was debited but enrollment was not confirmed.</li>
            <li>Request made within 48 hours of payment, prior to course access being granted.</li>
          </ul>
        </Section>
        <Section title="3. Non-Refundable Scenarios">
          The following are not eligible for refunds:
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Refund requests made after course content or access has been provided.</li>
            <li>Requests made beyond 48 hours of payment.</li>
            <li>Failure to complete the course within the selected duration.</li>
            <li>Change of mind after accessing course materials.</li>
          </ul>
        </Section>
        <Section title="4. Refund Process">
          To request a refund, please contact us at info@aeroinedutech.in or +91 9176209914
          with your Razorpay Payment ID and course details. Approved refunds will be processed
          back to the original payment method through Razorpay within 7–10 business days.
        </Section>
        <Section title="5. Disputes">
          For any payment disputes, please first contact Aeroin EduTech. If the issue remains
          unresolved, disputes may be raised with Razorpay as per their dispute resolution
          process.
        </Section>
        <Section title="6. Contact">
          For refund-related questions, please contact us at info@aeroinedutech.in
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
      <div className="text-sm leading-relaxed text-slate-400">{children}</div>
    </div>
  );
}
