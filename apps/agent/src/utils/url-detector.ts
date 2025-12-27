// CONSTANTS
import { INSTAGRAM_REEL_URL_REGEX, YOUTUBE_URL_REGEX } from '@/utils/constants';

export type UrlType = 'reel' | 'youtube' | null;

export interface UrlDetectionResult {
  type: UrlType;
  url: string | null;
}

export const detectUrl = (message: string): UrlDetectionResult => {
  if (!message || typeof message !== 'string') {
    return { type: null, url: null };
  }

  const reelMatch = message.match(INSTAGRAM_REEL_URL_REGEX);
  if (reelMatch) {
    return {
      type: 'reel',
      url: reelMatch[0],
    };
  }

  const youtubeMatch = message.match(YOUTUBE_URL_REGEX);
  if (youtubeMatch) {
    const videoId = youtubeMatch[1];
    const fullUrl = `https://www.youtube.com/watch?v=${videoId}`;
    return {
      type: 'youtube',
      url: fullUrl,
    };
  }

  return { type: null, url: null };
};
