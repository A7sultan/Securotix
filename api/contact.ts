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

  const { name, email, company, message } = req.body;

  try {
    /* =========================
       1️⃣ Internal email
    ========================== */
    await resend.emails.send({
      from: "Securotix <onboarding@resend.dev>",
      to: ["aminah.sultan735@gmail.com"], // change later
      subject: "New Contact Form Submission",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* =========================
       2️⃣ Auto-reply email
    ========================== */
    await resend.emails.send({
      from: "Securotix <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for contacting Securotix",
      html: `
        <p>Hi ${name},</p>

        <p>Thank you for reaching out to <strong>Securotix</strong>.</p>

        <p>We’ve received your message and our team will get back to you shortly.</p>

        <p>Best regards,<br/>
        <strong>Securotix Team</strong></p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Email failed" });
  }
}
