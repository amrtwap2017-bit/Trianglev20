import { NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Valid email is required'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = newsletterSchema.parse(body);

    // In production: Add to HubSpot list + send welcome email via Resend
    console.log('Newsletter signup:', { email: validated.email });

    return NextResponse.json(
      { success: true, message: 'You are now subscribed to Engineering Intelligence.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}