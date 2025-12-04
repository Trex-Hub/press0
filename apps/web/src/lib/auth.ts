// CORE
import { Pool } from 'pg';
import { betterAuth } from 'better-auth';
// CONSTANTS
import { DATABASE_URL } from '@/src/utils/constant';

export const auth = betterAuth({
  database: new Pool({
    connectionString: DATABASE_URL,
  }),
  emailAndPassword: {
    enabled: true,
  },
});
