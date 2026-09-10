import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export const runtime = 'nodejs';

let razorpayInstance: Razorpay | null = null;

function getRazorpay(): Razorpay {
  if (!razorpayInstance) {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keyId || !keySecret) {
      throw new Error('Razorpay keys are not configured');
    }
    razorpayInstance = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });
  }
  return razorpayInstance;
}

interface CreateOrderBody {
  courseId: string;
  courseName: string;
  duration: string;
  amount: number; // in paise
}

export async function POST(req: NextRequest) {
  try {
    const body: CreateOrderBody = await req.json();

    if (!body.courseId || !body.courseName || !body.duration || !body.amount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate amount is a positive integer in paise
    const amount = Math.round(Number(body.amount));
    if (!Number.isInteger(amount) || amount <= 0) {
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    const order = await getRazorpay().orders.create({
      amount,
      currency: 'INR',
      receipt: `aeroin_${body.courseId}_${Date.now()}`,
      notes: {
        courseId: body.courseId,
        courseName: body.courseName,
        duration: body.duration,
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Order creation failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
