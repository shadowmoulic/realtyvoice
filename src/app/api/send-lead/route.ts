import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, message, source } = body;

        const data = await resend.emails.send({
            from: 'RealtyVoice Leads <onboarding@resend.dev>',
            to: ['sayak@afbf.in'],
            subject: `🚨 New Lead: ${name} from ${source}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #7C3AED;">New RealtyVoice Lead Captured</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Company:</strong> ${company || 'N/A'}</p>
                    <p><strong>Message:</strong> ${message}</p>
                    <p><strong>Source:</strong> ${source}</p>
                    <hr />
                    <p style="font-size: 0.8rem; color: #666;">This lead has also been saved to your Supabase database.</p>
                </div>
            `
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
