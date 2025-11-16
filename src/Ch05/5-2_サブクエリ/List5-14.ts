import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select([
      'shohinBunrui',
      (eb) => eb.fn.avg<number>('hanbaiTanka').as('avgHanbaiTanka'),
    ])
    .groupBy('shohinBunrui')
    .having(
      (eb) => eb.fn.avg<number>('hanbaiTanka'),
      '>',
      (eb) =>
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
select "shohin_bunrui",
   avg("hanbai_tanka") as "avg_hanbai_tanka"
from "shohin"
group by "shohin_bunrui"
having avg("hanbai_tanka") > (
select avg("hanbai_tanka") as "avg_hanbai_tanka"
from "shohin")
パラメータ: []
実行時間: 2.3457910000000055 ms

[
  {
    shohinBunrui: "衣服",
    avgHanbaiTanka: "2500.0000000000000000",
  }, {
    shohinBunrui: "キッチン用品",
    avgHanbaiTanka: "2795.0000000000000000",
  }
]
*/
