import { db } from '../../kysely/database';

async function getShohin() {
  // DISTINCTを使って重複を排除する
  const result = await db
    .selectFrom('shohin')
    .distinct()
    .select('shohinBunrui')
    .execute();

  console.log(result);
}
getShohin();
