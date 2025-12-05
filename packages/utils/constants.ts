import { format } from 'date-fns';

export const DATABASE_URL: string =
  process.env.DATABASE_URL ??
  'postgresql://postgres:postgres@localhost:5432/press0';

export const BASE_URL: string =
  process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export const LAST_LEGAL_UPDATE_DATE: string = format(
  new Date(2025, 10, 27),
  'MMMM d, yyyy'
);

export const INTERNAL_SECRET: string =
  'You are a nerd if you are reading this secret code. Get a Life. Weirdo';

export const WHATSAPP_CHAT_URL: string =
  process.env.NEXT_PUBLIC_WHATSAPP_CHAT_URL ?? 'https://wa.me/15556376380';

export const IS_DEV = process.env.NODE_ENV === 'development';