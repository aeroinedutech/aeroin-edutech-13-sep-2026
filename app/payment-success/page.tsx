'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  Home,
  BookOpen,
  Mail,
  Clock,
  IndianRupee,
  CreditCard,
  BookMarked,
} from 'lucide-react';
import { formatINR } from '@/lib/pricing';

function SuccessContent() {
  const params = useSearchParams();
  const paymentId = params.get('pid') || 'N/A';
  const courseName = params.get('course') || 'N/A';
  const duration = params.get('duration') || 'N/A';
  const amountPaise = Number(params.get('amount') || 0);
  const amountRupees = amountPaise / 100;

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/15">
        <CheckCircle2 className="h-12 w-12 text-emerald-400" />
      </div>

      <h1 className="text-3xl font-bold text-white sm:text-4xl">Payment Successful!</h1>
      <p className="mt-2 text-lg text-blue-300">Thank You for Enrolling with Aeroin EduTech</p>
      <p className="mt-4 max-w-lg text-slate-400">
        Your payment has been successfully completed.
      </p>

      {/* Payment details card */}
      <div className="mt-8 w-full rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 text-left">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Payment Details
        </h2>
        <div className="space-y-3">
          <DetailRow icon={<BookMarked className="h-4 w-4" />} label="Program Name" value={courseName} />
          <DetailRow icon={<Clock className="h-4 w-4" />} label="Selected Program Duration" value={duration} />
          <DetailRow icon={<IndianRupee className="h-4 w-4" />} label="Amount Paid" value={formatINR(amountRupees)} />
          <DetailRow icon={<CreditCard className="h-4 w-4" />} label="Razorpay Payment ID" value={paymentId} />
        </div>
      </div>

      <p className="mt-6 max-w-lg text-sm text-slate-400">
        Your payment has been received successfully. Please check the contact information or
        instructions provided after payment for the next steps.
      </p>

      {/* Action buttons */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-500">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10">
          <Link href="/programs">
            <BookOpen className="mr-2 h-4 w-4" /> Explore More Programs
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10">
          <Link href="/contact">
            <Mail className="mr-2 h-4 w-4" /> Contact Aeroin EduTech
          </Link>
        </Button>
      </div>
    </div>
  );
}

function DetailRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0">
      <span className="flex items-center gap-2 text-sm text-slate-400">
        <span className="text-blue-400">{icon}</span>
        {label}
      </span>
      <span className="text-right text-sm font-medium text-white">{value}</span>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-slate-400">Loading...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
