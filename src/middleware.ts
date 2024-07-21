import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  if (url.pathname === '/') {
    const page = request.nextUrl.searchParams.get('page');
    if (!page || isNaN(parseInt(page))) {
      return NextResponse.redirect(new URL('/?page=1', request.url));
    }
  }
  return NextResponse.next();
}

export const conifg = {
  matcher: '/',
};
