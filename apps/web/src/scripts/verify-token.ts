// UTILS
import crypto from 'crypto';
// CONSTANTS
import { INTERNAL_SECRET as secret } from '@/src/utils/constant';

const verifyInternalToken = (token: string) => {
  try {
    const decoded: string = Buffer.from(token, 'base64url').toString('utf8');
    const [payload, sig] = decoded.split('.');

    const expectedSig: string = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');

    if (sig !== expectedSig) return false;

    return true;
  } catch {
    return false;
  }
};

export default verifyInternalToken;
