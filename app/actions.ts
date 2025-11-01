"use server";

import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export async function sendContactEmail(formData: FormData) {
  try {
    // Validate form data
    const validatedFields = formSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid form data. Please check your inputs.",
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    // Send email using Brevo API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact",
          email: process.env.BREVO_SMTP_USER, // Must be verified in Brevo
        },
        to: [
          {
            email: "rantshothabisomail@gmail.com",
            name: "Rantsho Thabiso",
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `Portfolio Contact: ${subject}`,
        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
    .info { background: white; padding: 15px; margin: 10px 0; border-radius: 4px; border-left: 4px solid #667eea; }
    .label { font-weight: bold; color: #667eea; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="info">
        <p><span class="label">Name:</span> ${name}</p>
        <p><span class="label">Email:</span> ${email}</p>
        <p><span class="label">Subject:</span> ${subject}</p>
      </div>
      <div class="info">
        <p class="label">Message:</p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
  </div>
</body>
</html>
        `,
        textContent: `
Name: ${name}
Email: ${email}

Message:
${message}
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo API error:", errorData);
      throw new Error("Failed to send email via Brevo API");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
