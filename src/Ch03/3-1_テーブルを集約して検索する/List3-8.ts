import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => eb.fn.max<number>('hanbaiTanka').as('hanbaiTankaMax'))
    .select((eb) => eb.fn.min<number>('shiireTanka').as('shiireTankaMin'))
    .execute();

  console.log(result);
}
getShohin();
