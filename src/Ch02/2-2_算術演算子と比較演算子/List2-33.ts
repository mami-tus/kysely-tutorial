import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shiireTanka'])
    .where('shohinBunrui', '=', 'キッチン用品')
    .where('hanbaiTanka', '>=', 3000)
    .execute();

  console.log(result);
}
getShohin();
