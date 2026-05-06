import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure Gmail SMTP transporter (same as PHP PHPMailer config)
function createTransporter() {
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.SMTP_EMAIL || process.env.GMAIL_USER,
      pass: process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD,
    },
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

    // Get recipient emails from environment
    const recipientEmail = process.env.CONTACT_EMAIL || process.env.SMTP_EMAIL || 'contact@dwarkaexpresswayncr.com';
    const ccEmails = process.env.CC_EMAILS ? process.env.CC_EMAILS.split(',') : [];

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
    const smtpEmail = process.env.SMTP_EMAIL || process.env.GMAIL_USER;
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD;

    if (!smtpEmail || !smtpPassword) {
      // Log the lead even if email can't be sent
      console.log('SMTP not configured. Lead received:', {
        name,
        email,
        phone,
        project: projectName,
        source: sourcePage,
        message,
        timestamp: currentDate,
      });
      
      // Still return success - lead was received
      return NextResponse.json({
        success: true,
        message: 'Thank you! We will contact you soon.',
        warning: 'Email notification pending configuration',
      });
    }

    // Create transporter and send email
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

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will contact you soon.',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
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
