// CORE
import { createAuthClient } from 'better-auth/react';
// CONSTANTS
import { BASE_URL } from '@/src/utils/constant';

export const authClient = createAuthClient({
  baseURL: BASE_URL,
});

export const { signIn, useSession, updateUser, signUp } = authClient;
