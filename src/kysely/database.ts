import type { DB } from './db'; // this is the Database interface we defined earlier
import { Pool } from 'pg';
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'kysely_tutorial',
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    port: 5433,
    max: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
  dialect,
  plugins: [new CamelCasePlugin()],
});
