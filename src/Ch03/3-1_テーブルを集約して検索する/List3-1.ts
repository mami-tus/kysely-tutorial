import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => eb.fn.countAll<number>().as('count'))
    .execute();

  console.log(result);
}
getShohin();
