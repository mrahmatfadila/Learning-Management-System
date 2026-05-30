import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Protected routes that require authentication
const protectedPaths = ['/dashboard'];
// Routes only for guests (redirect to dashboard if already logged in)
const guestPaths = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('lms_token')?.value;

  // Check if accessing a protected route without a token
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  if (isProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check if accessing guest routes while already logged in
  const isGuest = guestPaths.some((path) => pathname.startsWith(path));
  if (isGuest && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
