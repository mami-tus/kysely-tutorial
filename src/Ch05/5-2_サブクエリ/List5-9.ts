import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom((eb) =>
      eb
        .selectFrom('shohin')
        .select(['shohinBunrui', eb.fn.countAll().as('cntShohin')])
        .groupBy('shohinBunrui')
        .as('shohinSum')
    )
    .select(['shohinBunrui', 'cntShohin'])
    .execute();

  console.log(result);
}
getShohin();

/**
 * 🟢 クエリ実行:
SQL:
select "shohin_bunrui",
   "cnt_shohin"
from (
select "shohin_bunrui",
   count(*) as "cnt_shohin"
from "shohin"
group by "shohin_bunrui") as "shohin_sum"
パラメータ: []
実行時間: 3.5901250000000005 ms

[
  {
    shohinBunrui: "事務用品",
    cntShohin: "2",
  }, {
    shohinBunrui: "衣服",
    cntShohin: "2",
  }, {
    shohinBunrui: "キッチン用品",
    cntShohin: "4",
  }
]

 */
