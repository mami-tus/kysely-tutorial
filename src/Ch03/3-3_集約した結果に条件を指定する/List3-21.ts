import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      'shohinBunrui',
      eb.fn.avg<number>('hanbaiTanka').as('hanbaiTankaAvg'),
    ])
    .groupBy('shohinBunrui')
    .having((eb) => eb.fn.avg<number>('hanbaiTanka'), '>=', 2500)
    .execute();

  console.log(result);
}
getShohin();

/**
SQL:
select "shohin_bunrui",
   avg("hanbai_tanka") as "hanbai_tanka_avg"
from "shohin"
group by "shohin_bunrui"
having avg("hanbai_tanka") >= $1
パラメータ: [ 2500 ]
---
集約したグループから2行のものを選択する
[
  {
    shohinBunrui: "衣服",
    shohinBunruiCount: "2",
  }, {
    shohinBunrui: "事務用品",
    shohinBunruiCount: "2",
  }
]
 */
