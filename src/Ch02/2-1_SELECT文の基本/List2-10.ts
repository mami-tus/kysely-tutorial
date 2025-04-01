import { db } from '../../kysely/database';

async function getShohin() {
  // DISTINCTを使って重複を排除する
  /**
  [
  {
    shohinMei: "Tシャツ",
    shohinBunrui: "衣服",
  }, {
    shohinMei: "カッターシャツ",
    shohinBunrui: "衣服",
  }
]
   */
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'shohinBunrui'])
    .where('shohinBunrui', '=', '衣服')
    .execute();

  console.log(result);
}
getShohin();
