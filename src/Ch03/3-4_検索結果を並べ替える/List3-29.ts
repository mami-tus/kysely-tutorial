import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId', 'shohinMei', 'hanbaiTanka', 'shiireTanka'])
    .orderBy('hanbaiTanka desc') // .orderBy('hanbaiTanka', 'desc') と書いても同じ
    .execute();

  console.log(result);
}
getShohin();

/**
 * SQL:
select "shohin_id",
   "shohin_mei",
   "hanbai_tanka",
   "shiire_tanka"
from "shohin"
order by "hanbai_tanka" desc
パラメータ: []
実行時間: 2.215333000000001 ms
 */
