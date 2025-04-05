import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'torokubi'])
    .where('torokubi', '<=', new Date('2009-04-28'))
    .execute();

  console.log(result);
}
getShohin();
