import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/* 
=============================================================================
  📘 NEXT.JS BACKEND API ROUTE (OPTION C EXPLANATION):
=============================================================================
  1. Next.js App Router me 'src/app/api/<route_name>/route.js' ek backend endpoint hota hai.
     - Ye URL banata hai: POST /api/contact
  2. Iske liye alag se Express.js ya Node backend server chalane ki zaroorat nahi hoti!
  3. Frontend (ContactSlide.jsx) se 'fetch('/api/contact', { method: 'POST', body: ... })'
     call hoti hai.
  4. Ye route message data receive karta hai aur 'nodemailer' library ke through 
     direct aapke email (gauravupadhyay6095@gmail.com) par forward kar deta hai.
=============================================================================
*/

export async function POST(request) {
  try {
    // 1. Frontend se bheja gaya JSON data parse karein
    const body = await request.json();
    const { name, email, message } = body;

    // 2. Input Validation (Ensure karein ki koi field empty na ho)
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Kripya sabhi fields (Name, Email, Message) bharein.' },
        { status: 400 }
      );
    }

    // Email format validation (Regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Kripya ek valid email address enter karein.' },
        { status: 400 }
      );
    }

    // 3. Environment Variables Check (Gmail credentials)
    const emailUser = process.env.EMAIL_USER?.trim();
    // Google App Password me se spaces hatao (e.g. "abcd efgh" -> "abcdefgh")
    const emailPass = process.env.EMAIL_PASS?.replace(/\s+/g, '');

    // Agar Vercel par Environment Variables set nahi hain:
    if (!emailUser || !emailPass) {
      console.error("❌ Vercel Configuration Missing: EMAIL_USER or EMAIL_PASS environment variables are not found!");
      return NextResponse.json(
        { 
          success: false, 
          error: 'Vercel par EMAIL_USER ya EMAIL_PASS environment variable configure nahi hai. Kripya Vercel Project Settings me add karke redeploy karein.' 
        },
        { status: 500 }
      );
    }

    // 4. Real Gmail SMTP (Vercel Serverless Compatible via Port 465 SSL)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    // Email template banayein jo Gaurav ke inbox me aayega
    const mailOptions = {
      from: `"Portfolio Contact Form" <${emailUser}>`,
      replyTo: email, // Direct reply to user
      to: 'gauravupadhyay6095@gmail.com',
      subject: `🚀 New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #0e091b; color: #f8fafc; padding: 25px; border-radius: 12px; max-width: 600px; margin: 0 auto; border: 1px solid #8b5cf6;">
          <h2 style="color: #c084fc; border-bottom: 2px solid rgba(168, 85, 247, 0.4); padding-bottom: 12px; margin-top: 0;">
            📬 New Message from Portfolio
          </h2>
          <p style="font-size: 15px; margin-bottom: 8px;">
            <strong>👤 Sender Name:</strong> <span style="color: #38bdf8;">${name}</span>
          </p>
          <p style="font-size: 15px; margin-bottom: 15px;">
            <strong>📧 Sender Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a>
          </p>
          <div style="background-color: rgba(255, 255, 255, 0.06); padding: 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; margin-top: 15px;">
            <strong style="color: #c084fc; display: block; margin-bottom: 6px;">💬 Message:</strong>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap; font-size: 14px; color: #e2e8f0;">${message}</p>
          </div>
          <p style="font-size: 12px; color: #94a3b8; margin-top: 25px; text-align: center;">
            Sent via Gaurav Upadhyay Portfolio Backend API • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Aapka message Gaurav ko successfully email ke zariye bhej diya gaya hai!',
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error: Message send nahi ho paya. Kripya thodi der baad koshish karein.' },
      { status: 500 }
    );
  }
}

