import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { sql } from 'drizzle-orm';
import { Pool } from 'pg';
import { schema } from '@/db/schema';
import { env } from '@/common/utils';

const pool = new Pool(
    {
        connectionString : env.DATABASE_URL,
        max: 20,
        connectionTimeoutMillis: 10000,
        idleTimeoutMillis :  30000,
        maxLifetimeSeconds : 60,
    }
);

export const db = drizzle({ 
    client : pool,
    schema : schema,
    casing : 'snake_case' 
});

export { pool };
