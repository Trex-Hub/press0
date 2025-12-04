// NEXT
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
// AUTH
import { signUp } from '@/src/lib/auth-client';
// SCRIPT
import verifyInternalToken from '@/src/scripts/verify-token';

export async function POST(request: NextRequest) {
  const { name, email, password, authToken } = await request.json();
  if (!verifyInternalToken(authToken)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    await signUp.email({
      email,
      password,
      name,
    });
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error, message: 'Something went wrong' },
      { status: 500 }
    );
  }
}
