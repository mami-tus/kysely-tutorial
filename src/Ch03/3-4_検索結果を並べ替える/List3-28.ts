import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId', 'shohinMei', 'hanbaiTanka', 'shiireTanka'])
    .orderBy('hanbaiTanka')
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
order by "hanbai_tanka"
パラメータ: []
実行時間: 2.215333000000001 ms

[
  {
    shohinId: "0008",
    shohinMei: "ボールペン",
    hanbaiTanka: 100,
    shiireTanka: null,
  }, {
    shohinId: "0006",
    shohinMei: "フォーク",
    hanbaiTanka: 500,
    shiireTanka: null,
  }, {
    shohinId: "0002",
    shohinMei: "穴あけパンチ",
    hanbaiTanka: 500,
    shiireTanka: 320,s
  }, {
    shohinId: "0007",
    shohinMei: "おろしがね",
    hanbaiTanka: 880,
    shiireTanka: 790,
  }, {
    shohinId: "0001",
    shohinMei: "Tシャツ",
    hanbaiTanka: 1000,
    shiireTanka: 500,
  }, {
    shohinId: "0004",
    shohinMei: "包丁",
    hanbaiTanka: 3000,
    shiireTanka: 2800,
  }, {
    shohinId: "0003",
    shohinMei: "カッターシャツ",
    hanbaiTanka: 4000,
    shiireTanka: 2800,
  }, {
    shohinId: "0005",
    shohinMei: "圧力鍋",
    hanbaiTanka: 6800,
    shiireTanka: 5000,
  }
]
 */
