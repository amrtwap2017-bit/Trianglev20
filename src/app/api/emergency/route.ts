import { NextResponse } from 'next/server';
import { z } from 'zod';

const emergencySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  hotel: z.string().min(1, 'Hotel name is required'),
  phone: z.string().min(8, 'Valid phone number is required'),
  type: z.string().min(1, 'Emergency type is required'),
  description: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = emergencySchema.parse(body);

    // In production: Trigger immediate Slack notification + SMS + create HubSpot contact
    console.error('EMERGENCY CONTACT:', {
      name: validated.name,
      hotel: validated.hotel,
      phone: validated.phone,
      type: validated.type,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: 'Emergency request received. Our team will contact you immediately.' },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    console.error('Emergency form error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please call our 24/7 emergency line directly.' },
      { status: 500 }
    );
  }
}