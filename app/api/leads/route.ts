import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import type { Lead } from "@/lib/types";

// Spam protection - simple honeypot and rate limiting
const submissionCache = new Map<string, number>();
const RATE_LIMIT_MS = 60000; // 1 minute between submissions from same IP

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, projectId, projectName, source, honeypot } = body;

    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Thank you for your enquiry!" });
    }

    // Rate limiting by IP
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const lastSubmission = submissionCache.get(ip);
    if (lastSubmission && Date.now() - lastSubmission < RATE_LIMIT_MS) {
      return NextResponse.json(
        { success: false, error: "Please wait before submitting again" },
        { status: 429 }
      );
    }

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone are required" },
        { status: 400 }
      );
    }

    // Phone validation (Indian mobile)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, "").slice(-10))) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number" },
        { status: 400 }
      );
    }

    // Email validation (if provided)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { success: false, error: "Please enter a valid email address" },
          { status: 400 }
        );
      }
    }

    const db = await getDatabase();

    const lead = {
      name: name.trim(),
      email: email?.trim() || "",
      phone: phone.trim(),
      message: message?.trim() || "",
      projectId: projectId || null,
      projectName: projectName || null,
      source: source || "website",
      createdAt: new Date(),
      status: "new" as const,
    };

    await db.collection("leads").insertOne(lead);

    // Update rate limit cache
    submissionCache.set(ip, Date.now());

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry! Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit enquiry" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Simple auth check for admin
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const db = await getDatabase();
    const searchParams = request.nextUrl.searchParams;
    
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status");
    const search = searchParams.get("search");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    if (status) {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    const skip = (page - 1) * limit;

    const [leads, total] = await Promise.all([
      db
        .collection("leads")
        .find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db.collection("leads").countDocuments(query),
    ]);

    return NextResponse.json({
      success: true,
      data: {
        leads,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
    });
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}
