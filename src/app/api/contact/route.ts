import { NextResponse } from 'next/server';
import { getResend } from '@/lib/resend';
import { contactFormSchema } from '@/lib/schemas';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid form data', issues: result.error.issues },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, company, projectType, budget, message } =
      result.data;

    await getResend().emails.send({
      from: 'All is Well Entertainment <noreply@alliswellent.com>',
      to: 'hayden.mauk@alliswellent.com',
      replyTo: email,
      subject: `New inquiry from ${firstName} ${lastName}`,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        company && `Company: ${company}`,
        projectType && `Project Type: ${projectType}`,
        budget && `Budget: ${budget}`,
        '',
        'Message:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 },
    );
  }
}
