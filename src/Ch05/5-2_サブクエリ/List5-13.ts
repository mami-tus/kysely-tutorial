import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select([
      'shohinId',
      'shohinMei',
      'hanbaiTanka',
      (eb) =>
        eb
          .selectFrom('shohin')
          .select((eb) => eb.fn.avg<number>('hanbaiTanka').as('avgHanbaiTanka'))
          .as('avgTanka'),
    ])
    .execute();

  console.log(result);
}
getShohin();

/**
 * 🟢 クエリ実行:
SQL:
select "shohin_id",
   "shohin_mei",
   "hanbai_tanka",
   (
select avg("hanbai_tanka") as "avg_hanbai_tanka"
from "shohin") as "avg_tanka"
from "shohin"
パラメータ: []
実行時間: 4.5277499999999975 ms

[
  {
    shohinId: "0001",
    shohinMei: "Tシャツ",
    hanbaiTanka: 1000,
    avgTanka: "2097.5000000000000000",
  }, {
    shohinId: "0002",
    shohinMei: "穴あけパンチ",
    hanbaiTanka: 500,
    avgTanka: "2097.5000000000000000",
  }, {
    shohinId: "0003",
    shohinMei: "カッターシャツ",
    hanbaiTanka: 4000,
    avgTanka: "2097.5000000000000000",
  }, {
    shohinId: "0004",
    shohinMei: "包丁",
    hanbaiTanka: 3000,
    avgTanka: "2097.5000000000000000",
  }, {
    shohinId: "0005",
    shohinMei: "圧力鍋",
    hanbaiTanka: 6800,
    avgTanka: "2097.5000000000000000",
  }, {
    shohinId: "0006",
    shohinMei: "フォーク",
    hanbaiTanka: 500,
    avgTanka: "2097.5000000000000000",
  }, {
    shohinId: "0007",
    shohinMei: "おろしがね",
    hanbaiTanka: 880,
    avgTanka: "2097.5000000000000000",
  }, {
    shohinId: "0008",
    shohinMei: "ボールペン",
    hanbaiTanka: 100,
    avgTanka: "2097.5000000000000000",
  }
]
*/
