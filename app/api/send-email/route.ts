import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const emailHtml = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `;

    const data = await resend.emails.send({
      from: "alfonso@alfonsoalfaro.art",
      to: "aalfaro90@gpofinalpa.com",
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
    });

    return Response.json({ message: "Email sent!", data });
  } catch (error: any) {
    return new Response(
      JSON.stringify({ error: "Email sending failed", details: error.message }),
      { status: 500 }
    );
  }
}
