// UTILS
import crypto from 'crypto';
// CONSTANTS
import { INTERNAL_SECRET as secret } from '@/src/utils/constant';

function generateInternalToken(action = 'create-user') {
  const timestamp: number = Date.now();
  const payload: string = `${action}:${timestamp}`;

  const signature: string = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  const token: string = Buffer.from(`${payload}.${signature}`).toString(
    'base64url'
  ) as string;
  console.log('✅ Generated token:');
  console.log(token);
  return token;
}

generateInternalToken();
