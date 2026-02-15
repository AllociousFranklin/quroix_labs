import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Extract visitor IP address
  // In Vercel, request.ip is usually populated.
  // We also check x-forwarded-for just in case.
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  
  const userAgent = request.headers.get('user-agent') || 'unknown'
  const path = request.nextUrl.pathname

  // Log the visit details
  // This will appear in Vercel Runtime Logs
  console.log(JSON.stringify({
    timestamp: new Date().toISOString(),
    event: 'visitor_log',
    ip,
    path,
    userAgent
  }))

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (public images folder)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
}
