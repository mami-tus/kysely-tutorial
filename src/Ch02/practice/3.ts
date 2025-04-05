import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'hanbaiTanka', 'shiireTanka'])
    .where(
      sql`${sql.ref('hanbai_tanka')} - ${sql.ref('shiire_tanka')}`,
      '>=',
      500
    )
    .execute();

  console.log(result);
}
getShohin();
