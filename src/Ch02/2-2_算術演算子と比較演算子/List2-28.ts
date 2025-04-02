import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shiireTanka'])
    .where('shiireTanka', 'is not', null)
    .execute();

  console.log(result);
}
getShohin();
