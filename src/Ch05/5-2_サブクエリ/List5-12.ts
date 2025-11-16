import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId', 'shohinMei', 'hanbaiTanka'])
    .where('hanbaiTanka', '>', (eb) =>
      eb
        .selectFrom('shohin')
        .select((eb) => eb.fn.avg<number>('hanbaiTanka').as('avgHanbaiTanka'))
    )
    .execute();

  console.log(result);
}
getShohin();

/**
 * 🟢 クエリ実行:
SQL:
select "shohin_id",
   "shohin_mei",
   "hanbai_tanka"
from "shohin"
where "hanbai_tanka" > (
select avg("hanbai_tanka") as "avg_hanbai_tanka"
from "shohin")
パラメータ: []
実行時間: 4.8877080000000035 ms

[
  {
    shohinId: "0003",
    shohinMei: "カッターシャツ",
    hanbaiTanka: 4000,
  }, {
    shohinId: "0004",
    shohinMei: "包丁",
    hanbaiTanka: 3000,
  }, {
    shohinId: "0005",
    shohinMei: "圧力鍋",
    hanbaiTanka: 6800,
  }
]
*/
