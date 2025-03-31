import { db } from '../../kysely/database';

async function getShohin() {
  // Shohinテーブルからデータを取得する
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId', 'shohinMei', 'shiireTanka'])
    .execute();

  console.log(result);
}
getShohin();
