import { db } from '../../kysely/database';

async function getShohin() {
  // DISTINCTを使って重複を排除する
  /**
   * nullも一つにまとめられる
   * [
  {
    shiireTanka: null,
  }, {
    shiireTanka: 320,
  }, {
    shiireTanka: 500,
  }, {
    shiireTanka: 2800,
  }, {
    shiireTanka: 5000,
  }, {
    shiireTanka: 790,
  }
]
   */
  const result = await db
    .selectFrom('shohin')
    .distinct()
    .select('shiireTanka')
    .execute();

  console.log(result);
}
getShohin();
