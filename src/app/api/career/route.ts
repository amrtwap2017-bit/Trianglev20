import { NextResponse } from 'next/server';
import { z } from 'zod';

const careerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  position: z.string().min(1, 'Position is required'),
  experience: z.string().optional(),
  linkedin: z.string().url().optional().or(z.literal('')),
  message: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = careerSchema.parse(body);

    // In production: Send to internal notification + Resend confirmation
    console.log('Career application:', {
      name: validated.name,
      email: validated.email,
      position: validated.position,
    });

    return NextResponse.json(
      { success: true, message: 'Application received. We will review it and contact you within 5 business days.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error('Career form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again or email careers@triangleblack.com.' },
      { status: 500 }
    );
  }
}