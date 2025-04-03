import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shiireTanka'])
    .where((eb) =>
      eb.or([
        eb('shohinBunrui', '=', 'キッチン用品'),
        eb('hanbaiTanka', '>=', 3000),
      ])
    )
    .execute();

  console.log(result);
}
getShohin();
