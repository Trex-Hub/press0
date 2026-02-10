let fingerprintCache: string | null = null;

const generateId = (): string =>
  `web-${Date.now()}-${Math.random().toString(36).substring(7)}`;

const getFingerprint = (): string => {
  if (fingerprintCache) return fingerprintCache;

  try {
    const stored = localStorage.getItem('press0-fingerprint');
    if (stored) {
      fingerprintCache = stored;
      return stored;
    }

    const fingerprint = generateId();
    localStorage.setItem('press0-fingerprint', fingerprint);
    fingerprintCache = fingerprint;
    return fingerprint;
  } catch {
    // Fallback for incognito/private browsing or quota exceeded
    const fallback = generateId();
    fingerprintCache = fallback;
    return fallback;
  }
};

export default getFingerprint;