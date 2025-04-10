import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select([
      'shohinId as id',
      'shohinMei',
      'hanbaiTanka as ht',
      'shiireTanka as st',
    ])
    .orderBy(['st', 'id'])
    .execute();

  console.log(result);
}
getShohin();

/**
🟢 クエリ実行:
SQL:
select "shohin_id" as "id",
   "shohin_mei",
   "hanbai_tanka" as "ht",
   "shiire_tanka" as "st"
from "shohin"
order by "st",
   "id"

SELECTより後でORDERBYが実行されるので別名を利用できる
 */
