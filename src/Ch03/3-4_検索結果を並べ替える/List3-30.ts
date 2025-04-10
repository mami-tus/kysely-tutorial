import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId', 'shohinMei', 'hanbaiTanka', 'shiireTanka'])
    .orderBy(['hanbaiTanka', 'shohinId'])
    .execute();

  console.log(result);
}
getShohin();

/**
🟢 クエリ実行:
SQL:
select "shohin_id",
   "shohin_mei",
   "hanbai_tanka",
   "shiire_tanka"
from "shohin"
order by "hanbai_tanka",
   "shohin_id"
パラメータ: []
実行時間: 1.7407499999999985 ms

[
  {
    shohinId: "0008",
    shohinMei: "ボールペン",
    hanbaiTanka: 100,
    shiireTanka: null,
  }, {
    shohinId: "0002",
    shohinMei: "穴あけパンチ",
    hanbaiTanka: 500,
    shiireTanka: 320,
  }, {
    shohinId: "0006",
    shohinMei: "フォーク",
    hanbaiTanka: 500,
    shiireTanka: null,
  }, {・・・}
 */
