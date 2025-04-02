import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shohinBunrui'])
    .where('hanbaiTanka', '<>', 500)
    .execute();

  console.log(result);
}
getShohin();
