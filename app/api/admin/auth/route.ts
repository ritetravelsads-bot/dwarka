import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin password not configured' },
        { status: 500 }
      );
    }
    
    if (password === adminPassword) {
      const cookieStore = await cookies();
      cookieStore.set('admin_auth', 'authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
      
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Authentication failed' },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_auth');
  return NextResponse.json({ success: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get('admin_auth');
  
  if (authCookie?.value === 'authenticated') {
    return NextResponse.json({ authenticated: true });
  }
  
  return NextResponse.json({ authenticated: false });
}
