import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getDatabase } from '@/lib/mongodb';
import type { Lead } from '@/lib/types';

// Resolve SMTP credentials from any of the supported env var names.
function getSmtpCredentials() {
  const user = (process.env.SMTP_USER || process.env.SMTP_EMAIL || process.env.GMAIL_USER || '').trim();
  // Gmail App Passwords are often copied with spaces (e.g. "abcd efgh ijkl mnop").
  // Strip all whitespace so the 16-char password is sent correctly.
  const pass = (process.env.SMTP_PASS || process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD || '').replace(/\s+/g, '');
  return { user, pass };
}

// Configure Gmail SMTP transporter (same as PHP PHPMailer config)
function createTransporter() {
  const { user, pass } = getSmtpCredentials();
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false, // For development
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, project, message, source, utm_source, utm_medium, utm_campaign } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Validate email format if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone format (10 digits)
    const cleanPhone = phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // STEP 1 — Persist the lead to MongoDB (primary, reliable path the admin panel reads).
    // This must succeed for the submission to be considered successful.
    try {
      const db = await getDatabase();
      const lead: Omit<Lead, '_id'> = {
        name: String(name).trim(),
        email: email ? String(email).trim() : '',
        phone: String(phone).trim(),
        message: message ? String(message).trim() : '',
        projectId: null,
        projectName: project || null,
        source: source || 'contact-form',
        createdAt: new Date(),
        status: 'new',
      };
      await db.collection('leads').insertOne(lead);
    } catch (dbError) {
      console.error('[v0] Failed to save lead to database:', dbError);
      return NextResponse.json(
        { success: false, error: 'Unable to submit your request. Please try again or call us directly.' },
        { status: 500 }
      );
    }

    // Get recipient emails from environment — all leads land on info@dwarkaexpresswayncr.com
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@dwarkaexpresswayncr.com';
    const ccEmails = process.env.CC_EMAILS ? process.env.CC_EMAILS.split(',').map((e) => e.trim()).filter(Boolean) : [];

    // Build email content (matching PHP format)
    const currentDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const projectName = project || 'Not specified';
    const sourcePage = source || 'Contact Form';
    
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>New Lead - Dwarka Expressway</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #f14201 0%, #d63b01 100%); padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Received</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 5px 0 0 0;">Dwarka Expressway NCR</p>
        </div>
        
        <div style="background: #f9f9f9; padding: 25px; border: 1px solid #e0e0e0; border-top: none;">
          <h2 style="color: #f14201; margin-top: 0; border-bottom: 2px solid #f14201; padding-bottom: 10px;">Contact Details</h2>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><a href="tel:${cleanPhone}" style="color: #f14201; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Project:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${projectName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Source:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${sourcePage}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Date/Time:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${currentDate}</td>
            </tr>
            ${utm_source ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">UTM Source:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${utm_source}</td>
            </tr>
            ` : ''}
            ${utm_medium ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">UTM Medium:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${utm_medium}</td>
            </tr>
            ` : ''}
            ${utm_campaign ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">UTM Campaign:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${utm_campaign}</td>
            </tr>
            ` : ''}
          </table>
          
          ${message ? `
          <h3 style="color: #f14201; margin-top: 20px;">Message:</h3>
          <div style="background: white; padding: 15px; border-radius: 4px; border: 1px solid #e0e0e0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
          ` : ''}
        </div>
        
        <div style="background: #333; color: white; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px;">
          <p style="margin: 0;">This lead was submitted from <a href="https://dwarkaexpresswayncr.com" style="color: #f14201;">dwarkaexpresswayncr.com</a></p>
        </div>
      </body>
      </html>
    `;

    const plainTextContent = `
New Lead - Dwarka Expressway NCR
================================

Name: ${name}
Email: ${email || 'Not provided'}
Phone: ${phone}
Project: ${projectName}
Source: ${sourcePage}
Date/Time: ${currentDate}
${utm_source ? `UTM Source: ${utm_source}` : ''}
${utm_medium ? `UTM Medium: ${utm_medium}` : ''}
${utm_campaign ? `UTM Campaign: ${utm_campaign}` : ''}

${message ? `Message:\n${message}` : ''}
    `.trim();

    // Check if SMTP is configured
    const { user: smtpEmail, pass: smtpPassword } = getSmtpCredentials();

    // STEP 2 — Best-effort email notification. The lead is already saved, so an
    // email failure (or missing SMTP config) must NOT fail the request.
    if (!smtpEmail || !smtpPassword) {
      console.log('[v0] SMTP not configured — lead saved to DB, email notification skipped.');
      return NextResponse.json({
        success: true,
        message: 'Thank you! We will contact you soon.',
      });
    }

    try {
      const transporter = createTransporter();
      const mailOptions = {
        from: `"Dwarka Expressway NCR" <${smtpEmail}>`,
        to: recipientEmail,
        cc: ccEmails.length > 0 ? ccEmails : undefined,
        replyTo: email || undefined,
        subject: `New Lead: ${name} - ${projectName}`,
        text: plainTextContent,
        html: htmlContent,
      };
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      // Lead is already saved — log the email failure but still report success.
      console.error('[v0] Lead saved but email notification failed:', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you soon.',
    });

  } catch (error) {
    console.error('[v0] Contact form error:', error);

    // Return a user-friendly error
    return NextResponse.json(
      { 
        success: false, 
        error: 'Unable to submit your request. Please try again or call us directly.' 
      },
      { status: 500 }
    );
  }
}
