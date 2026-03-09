import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { sql } from 'drizzle-orm';
import { Pool } from 'pg';
import { schema } from '@/db/schema';

const pool = new Pool(
    {
        connectionString : process.env.DATABASE_URL,
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

//deleted later
async function testConnexion() {
    setInterval(async () => {
        try {
            await db.execute(sql`SELECT 1`);
            console.log("Requête envoyée...");
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    }, 2000);
};

testConnexion();