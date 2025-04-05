import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shohinBunrui', 'torokubi'])
    .where('shohinBunrui', '=', '事務用品')
    .where((eb) =>
      eb.or([
        eb('torokubi', '=', new Date('2009-09-11')),
        eb('torokubi', '=', new Date('2009-09-20')),
      ])
    )
    .execute();

  console.log(result);
}
getShohin();
