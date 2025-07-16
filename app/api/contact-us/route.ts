import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message, phone , company} = body;

  // Basic input validation
  if (!name || !email || !phone ) {
    return NextResponse.json(
      { success: false, message: "Missing required fields." },
      { status: 400 }
    );
  }

  /** Create email passkey in gmail account */
  const smtpUser = "sruthiamutharani@gmail.com";
  const smtpPass = "bibn ruvm dswr rxuj";

  /** Create receiver email */
  const receiver = "sruthiamutharani@gmail.com";

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: `Enquiry Submission <${smtpUser}>`,
      to: receiver,
      subject: `Enquiry Submission`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Company:</b> ${company || "N/A"}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
