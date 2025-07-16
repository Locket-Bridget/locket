import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, serviceName } = req.body;

  if (!name || !email || !serviceName) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Locket Contact Form <onboarding@resend.dev>", // Use this or your verified domain email
      to: "admin@locketsecurity.com", // Your receiving email
      subject: `New Consultation Request for ${serviceName}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${serviceName}`,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
