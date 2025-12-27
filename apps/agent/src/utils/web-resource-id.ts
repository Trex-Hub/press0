// UTILS
import { v7 as uuidv7 } from 'uuid';
// LOGGER
import logger from '@/utils/logger';

export const getWebResourceId = (request: Request): string => {
  try {
    const headerFingerprint = request.headers.get('X-Client-Fingerprint');
    if (headerFingerprint) {
      logger.debug('Fingerprint from header:', { headerFingerprint });
      return headerFingerprint;
    }

    logger.warn('No fingerprint found in request, generating fallback');
    return `web-${uuidv7()}`;
  } catch (error) {
    logger.error('Error extracting web resource ID:', { error });
    return `web-${uuidv7()}`;
  }
};

export const getWebResourceIdFromBody = (body: {
  fingerprint?: string;
}): string => {
  if (body?.fingerprint) {
    logger.debug('Fingerprint from body:', { fingerprint: body.fingerprint });
    return body.fingerprint;
  }

  logger.warn('No fingerprint in body, generating fallback');
  return `web-${uuidv7()}`;
};
