import { DATABASE_URL } from '@repo/utils/constants';
import { Pool } from 'pg';

const db = new Pool({
  connectionString: DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default db;
