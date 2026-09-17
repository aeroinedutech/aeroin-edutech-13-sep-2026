import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { XCircle, RotateCcw, BookOpen, Mail } from 'lucide-react';

export default function PaymentFailedPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/15">
        <XCircle className="h-12 w-12 text-red-400" />
      </div>

      <h1 className="text-3xl font-bold text-white sm:text-4xl">Payment Unsuccessful</h1>
      <p className="mt-4 max-w-lg text-lg text-slate-400">
        Your payment could not be completed. Please try again.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild className="bg-blue-600 text-white hover:bg-blue-500">
          <Link href="/programs">
            <RotateCcw className="mr-2 h-4 w-4" /> Retry Payment
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10">
          <Link href="/programs">
            <BookOpen className="mr-2 h-4 w-4" /> Back to Programs
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10">
          <Link href="/contact">
            <Mail className="mr-2 h-4 w-4" /> Contact Support
          </Link>
        </Button>
      </div>
    </div>
  );
}
