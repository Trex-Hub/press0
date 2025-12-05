// CORE
import { createAuthClient } from 'better-auth/react';
// CONSTANTS
import { BASE_URL } from '@repo/utils/constants';

export const authClient = createAuthClient({
  baseURL: BASE_URL,
});

export const { signIn, useSession, updateUser, signUp } = authClient;
