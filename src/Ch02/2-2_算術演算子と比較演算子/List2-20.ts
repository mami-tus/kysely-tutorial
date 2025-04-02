import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shohinBunrui', 'hanbaiTanka'])
    .where('hanbaiTanka', '>=', 1000)
    .execute();

  console.log(result);
}
getShohin();
