import { db } from '../../kysely/database';

async function getShohin() {
  // Shohinテーブルからデータを取得する
  const result = await db
    .selectFrom('shohin')
    .select([
      'shohinId as 商品ID',
      'shohinMei as 商品名',
      'shiireTanka as 仕入単価',
    ])
    .execute();

  console.log(result);
}
getShohin();
