import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shohinBunrui', 'torokubi'])
    .where('torokubi', '<', new Date('2009-09-27'))
    .execute();

  console.log(result);
}
getShohin();
