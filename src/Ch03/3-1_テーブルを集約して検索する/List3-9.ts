import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => eb.fn.max('torokubi').as('torokubiMax'))
    .select((eb) => eb.fn.min('torokubi').as('torokubiMin'))
    .execute();

  console.log(result);
}
getShohin();
