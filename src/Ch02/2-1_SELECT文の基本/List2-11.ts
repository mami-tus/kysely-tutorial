import { db } from '../../kysely/database';

async function getShohin() {
  // DISTINCTを使って重複を排除する
  /**
  [
  {
    shohinMei: "Tシャツ",
  }, {
    shohinMei: "カッターシャツ",
  }
]
   */
  const result = await db
    .selectFrom('shohin')
    .select('shohinMei')
    .where('shohinBunrui', '=', '衣服')
    .execute();

  console.log(result);
}
getShohin();
