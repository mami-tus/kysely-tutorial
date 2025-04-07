import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => eb.fn.avg<number>('hanbaiTanka').as('hanbaiTankaAvg'))
    .select((eb) => eb.fn.avg<number>('shiireTanka').as('shiireTankaAvg'))
    .execute();

  console.log(result);
}
getShohin();
