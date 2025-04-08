import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => eb.fn.sum<number>('hanbaiTanka').as('sum'))
    .execute();

  console.log(result);
}
getShohin();
