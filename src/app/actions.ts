'use server';

import type { z } from 'zod';
import { contactSchema } from '@/lib/schemas';
import * as nodemailer from 'nodemailer';

// Contact Form
export async function submitContactFormAction(data: z.infer<typeof contactSchema>) {
  console.log('Contact form data received:', data);

  // Read SMTP configuration from environment variables
  const SMTP_HOST = process.env.SMTP_HOST;
  const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const SMTP_USER = process.env.SMTP_USER;
  const SMTP_PASS = process.env.SMTP_PASS;
  const SMTP_SECURE = process.env.SMTP_SECURE === 'true';
  const DEST_EMAIL = process.env.DEST_EMAIL || 'middris112@gmail.com';

  if (!SMTP_HOST || !SMTP_PORT) {
    console.error('SMTP configuration missing. Check SMTP_HOST and SMTP_PORT env vars.');
    // Still return success to avoid breaking demo sites — adjust as needed.
    return { success: false, message: 'SMTP configuration is not set on the server.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE || SMTP_PORT === 465, // true for 465, false for other ports
      auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
    });

    const mailSubject = `New message from ${data.name} via portfolio site`;
    const mailText = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;

    const info = await transporter.sendMail({
      from: SMTP_USER || `no-reply@${SMTP_HOST}`,
      to: DEST_EMAIL,
      subject: mailSubject,
      text: mailText,
      html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong></p><p>${data.message.replace(/\n/g, '<br/>')}</p>`,
    });

    console.log('Email sent:', info);
    return { success: true, message: 'Thank you for your message! I will get back to you soon.' };
  } catch (error) {
    console.error('Error sending contact form email:', error);
    return { success: false, message: 'Failed to send message. Please try again later.' };
  }
}
