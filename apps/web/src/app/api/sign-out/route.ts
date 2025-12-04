// AUTH
import { auth } from '@/src/lib/auth';
// NEXT
import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  await auth.api.signOut({
    headers: await headers(),
  });
  return NextResponse.redirect(new URL('/login', request.url));
}
