/// <reference types="node" />

import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  try {
    /* Internal HR email */
    await resend.emails.send({
      from: "Securotix <onboarding@resend.dev>",
      to: ["aminah.sultan735@gmail.com"],
      subject: "New Career Application",
      html: `
        <h3>New Career Application</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* Auto-reply */
    await resend.emails.send({
      from: "Securotix <onboarding@resend.dev>",
      to: [email],
      subject: "We’ve received your application",
      html: `
        <p>Hi ${firstName},</p>

        <p>Thank you for applying to <strong>Securotix</strong>.</p>

        <p>Our HR team is reviewing your application.</p>

        <p>Best regards,<br/>
        <strong>Securotix HR Team</strong></p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email failed" });
  }
}
