'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader2, CreditCard, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { whatsappLink } from '@/lib/enquiry';

interface EnrollButtonProps {
  courseId: string;
  courseName: string;
  duration: string;
  amount: number; // in paise
  className?: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'lg' | 'sm';
  label?: string;
  paymentLink?: string;
  isFreeDemo?: boolean;
}

// Razorpay checkout types
interface RazorpayOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

interface RazorpayVerifyResponse {
  verified: boolean;
  paymentId: string;
  orderId: string;
  courseName: string;
  duration: string;
  amount: number;
}

interface RazorpayCheckoutHandlers {
  handler: (response: { razorpay_payment_id: string; razorpay_order_id: string; razorpay_signature: string }) => void;
  modal?: {
    ondismiss?: () => void;
  };
}

interface RazorpayCheckoutOptions extends RazorpayCheckoutHandlers {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color?: string;
  };
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => {
      open: () => void;
      on: (event: string, handler: () => void) => void;
    };
  }
}

export function EnrollButton({
  courseId,
  courseName,
  duration,
  amount,
  className,
  variant = 'default',
  size = 'default',
  label = 'Enroll Now',
  paymentLink,
  isFreeDemo,
}: EnrollButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleEnroll() {
    if (isFreeDemo || amount === 0) {
      const msg = `Hello Aeroin EduTech Team, I would like to book a free demo session for "${courseName}". Please share the available demo session schedule and details.`;
      window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer');
      return;
    }

    if (paymentLink) {
      window.open(paymentLink, '_blank', 'noopener,noreferrer');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      // Step 1: Create Razorpay order on the server
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseId, courseName, duration, amount }),
      });

      if (!orderRes.ok) {
        throw new Error('Could not initiate payment. Please try again.');
      }

      const order: RazorpayOrderResponse = await orderRes.json();

      // Step 2: Load Razorpay checkout script
      await loadRazorpayScript();

      // Step 3: Open Razorpay checkout
      const rzp = new window.Razorpay!({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: 'Aeroin EduTech',
        description: `${courseName} — ${duration}`,
        order_id: order.orderId,
        prefill: {},
        theme: { color: '#2563eb' },
        handler: (response) => {
          verifyPayment(response);
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
      });

      rzp.open();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setError(msg);
      setLoading(false);
    }
  }

  async function verifyPayment(response: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  }) {
    try {
      const verifyRes = await fetch('/api/razorpay/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...response,
          courseId,
          courseName,
          duration,
          amount,
        }),
      });

      if (!verifyRes.ok) {
        const data = await verifyRes.json().catch(() => ({}));
        throw new Error(data.error || 'Payment verification failed');
      }

      const result: RazorpayVerifyResponse = await verifyRes.json();

      if (result.verified) {
        // Redirect to success page with query params (no data is stored)
        const params = new URLSearchParams({
          pid: result.paymentId,
          oid: result.orderId,
          course: courseName,
          duration,
          amount: String(amount),
        });
        router.push(`/payment-success?${params.toString()}`);
      } else {
        router.push('/payment-failed');
      }
    } catch {
      router.push('/payment-failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn('flex flex-col items-stretch gap-2', className)}>
      <Button
        onClick={handleEnroll}
        disabled={loading}
        variant={variant}
        size={size}
        className={cn(
          variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-500 glow-blue',
          variant === 'outline' && 'border-white/20 text-white hover:bg-white/10'
        )}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            {isFreeDemo || amount === 0 ? (
              <MessageCircle className="mr-2 h-4 w-4" />
            ) : (
              <CreditCard className="mr-2 h-4 w-4" />
            )}
            {label}
          </>
        )}
      </Button>
      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
}

function loadRazorpayScript(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load payment gateway'));
    document.body.appendChild(script);
  });
}