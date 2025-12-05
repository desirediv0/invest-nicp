// API route for /api/form (lowercase). Implementation follows.
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
});

function buildAdminTemplate({ name, email, mobileNumber, message }) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>New Contact Form Submission - NICP</title>
        <style>
          body { font-family: Arial, sans-serif; color: #333; }
          .container{ max-width:600px;margin:0 auto;padding:20px;background:#f7f7f7;border-radius:8px }
          .header{ background:linear-gradient(135deg,#ff7a18,#ffd64d);padding:20px;border-radius:6px;color:#fff;text-align:center }
          .field{ margin:16px 0 }
          .label{ font-weight:700;color:#d35400;margin-bottom:6px }
          .value{ background:#fff;padding:12px;border-radius:6px;border-left:4px solid #ffd64d }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
            <p>NICP Website</p>
          </div>

          <div class="field">
            <div class="label">Name</div>
            <div class="value">${name}</div>
          </div>

          <div class="field">
            <div class="label">Email</div>
            <div class="value">${email}</div>
          </div>

          <div class="field">
            <div class="label">Mobile Number</div>
            <div class="value">${mobileNumber}</div>
          </div>

          <div class="field">
            <div class="label">Message</div>
            <div class="value">${message.replace(/\n/g, "<br>")}</div>
          </div>

          <p style="font-size:12px;color:#666;margin-top:18px">Submitted on: ${new Date().toLocaleString(
            "en-IN",
            { timeZone: "Asia/Kolkata" }
          )}</p>
        </div>
      </body>
    </html>
  `;
}

function buildUserTemplate({ name, message }) {
  // A polished, responsive confirmation email for the user
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Thanks for contacting NICP</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background:#f3f4f6; margin:0; padding:20px; }
          .card { max-width:680px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 6px 18px rgba(20,20,20,0.08); }
          .hero { background:linear-gradient(90deg,#ff8a00,#ff5e62); padding:28px; color:white; text-align:center }
          .logo { height:48px; display:inline-block; vertical-align:middle }
          .title { margin:8px 0 0; font-size:20px; font-weight:700 }
          .body { padding:24px; color:#111827; }
          .greeting { font-size:18px; margin:0 0 12px }
          .muted { color:#6b7280; font-size:14px }
          .message-box { background:#f9fafb; border:1px solid #eef2f7; padding:12px 14px; border-radius:8px; margin:14px 0; color:#374151; white-space:pre-wrap }
          .cta { display:block; text-align:center; margin:18px 0 }
          .btn { display:inline-block; background:#ff6a00; color:white; padding:10px 18px; border-radius:8px; text-decoration:none; font-weight:600 }
          .footer { background:#f8fafc; padding:16px 24px; color:#6b7280; font-size:13px; text-align:center }
          @media (max-width:520px){ .body{padding:18px} .hero{padding:20px} }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="hero">
            
            <div class="title">Thanks for contacting NICP</div>
          </div>
          <div class="body">
            <p class="greeting">Hi ${name},</p>
            <p class="muted">Thanks for reaching out — we received your message and one of our team members will respond within 24 business hours. Below is a copy of your message for your records.</p>

            <div class="message-box">${(message || "").replace(
              /\n/g,
              "<br>"
            )}</div>

           

            <p class="muted">If this is urgent, please call us at +91-9891015220 or reply directly to this email.</p>
          </div>
          <div class="footer">© ${new Date().getFullYear()} NICP — Invest National Industrial Corridor Projects</div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(request) {
  try {
    // Ensure SMTP config exists
    if (
      !process.env.NEXT_PUBLIC_SMTP_HOST ||
      !process.env.NEXT_PUBLIC_SMTP_USER ||
      !process.env.NEXT_PUBLIC_SMTP_PASSWORD
    ) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Email service configuration error" },
        { status: 500 }
      );
    }

    const payload = await request.json();
    const { name, email, mobileNumber, message } = payload;

    // Basic validation - trim all string fields
    const trimmedName = name?.trim() || "";
    const trimmedEmail = email?.trim() || "";
    const trimmedMobileNumber = mobileNumber?.trim() || "";
    const trimmedMessage = message?.trim() || "";

    if (
      !trimmedName ||
      !trimmedEmail ||
      !trimmedMobileNumber ||
      !trimmedMessage
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields" },
        { status: 400 }
      );
    }

    // Validate message is not empty after trimming
    if (trimmedMessage.length === 0) {
      return NextResponse.json(
        { error: "Message cannot be empty. Please enter your message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    if (String(trimmedMobileNumber).replace(/\D/g, "").length < 10) {
      return NextResponse.json(
        { error: "Please enter a valid mobile number" },
        { status: 400 }
      );
    }

    // Build and send admin email
    const adminHtml = buildAdminTemplate({
      name: trimmedName,
      email: trimmedEmail,
      mobileNumber: trimmedMobileNumber,
      message: trimmedMessage,
    });
    const adminMail = {
      from: process.env.NEXT_PUBLIC_FROM_EMAIL,
      to: "nicpindia@gmail.com",
      subject: `New Contact: ${trimmedName} | ${trimmedMobileNumber}`,
      html: adminHtml,
      replyTo: trimmedEmail,
    };

    await transporter.sendMail(adminMail);

    // Send confirmation email to user (if allowed)
    try {
      const userHtml = buildUserTemplate({
        name: trimmedName,
        message: trimmedMessage,
      });
      const userMail = {
        from: process.env.NEXT_PUBLIC_FROM_EMAIL,
        to: trimmedEmail,
        subject: `We've received your message — NICP`,
        html: userHtml,
      };

      await transporter.sendMail(userMail);
    } catch (uErr) {
      // Log user mail failure but don't fail the whole request
      console.warn("User confirmation email failed:", uErr?.message || uErr);
    }

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
