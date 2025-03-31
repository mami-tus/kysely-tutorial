import { db } from '../../kysely/database';

async function getShohin() {
  // Shohinテーブルからデータを取得する
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId as id', 'shohinMei as namae', 'shiireTanka as tanka'])
    .execute();

  console.log(result);
}
getShohin();
