import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinMei', 'hanbaiTanka', 'shiireTanka'])
    .orderBy('shohinId')
    .execute();

  console.log(result);
}
getShohin();

/**
SQL:
select "shohin_mei",
   "hanbai_tanka",
   "shiire_tanka"
from "shohin"
order by "shohin_id"

SELECTに含まれてない列もテーブルに存在してればORDER BY指定できる
 */
