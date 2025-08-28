import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host') || '';

  // Adjust base domain as needed (e.g., ezsignature.org or localhost)
  const baseDomain = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'ezsignature.org';

  // Extract subdomain if present and not the base/apex domain
  let subdomain = '';
  if (host.endsWith(baseDomain)) {
    const parts = host.replace(`.${baseDomain}`, '').split('.');
    if (parts.length === 1 && parts[0] !== baseDomain) {
      subdomain = parts[0];
    }
  }

  const res = NextResponse.next();
  if (subdomain) {
    // Expose subdomain to the app via header and cookie
    res.headers.set('x-workspace-subdomain', subdomain);
    res.cookies.set('workspaceSubdomain', subdomain, { path: '/', httpOnly: false });
  }
  return res;
}

export const config = {
  matcher: ['/((?!_next|api|fonts|images|public|favicon.ico).*)'],
};



