// UTILS
import crypto from 'crypto';
// CONSTANTS
import { INTERNAL_SECRET as secret } from '@repo/utils/constants';

const verifyInternalToken = (token: string) => {
  try {
    const decoded: string = Buffer.from(token, 'base64url').toString('utf8');
    const [payload, sig] = decoded.split('.');

    if (!payload || !sig) {
      return false;
    }

    const expectedSig: string = crypto
      .createHmac('sha256', secret)
      .update(payload)
      .digest('hex');

    if (sig !== expectedSig) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};

export default verifyInternalToken;
