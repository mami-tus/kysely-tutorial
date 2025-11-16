import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom((eb) =>
      eb
        .selectFrom((subEb) =>
          eb
            .selectFrom('shohin')
            .select(['shohinBunrui', subEb.fn.countAll().as('cntShohin')])
            .groupBy('shohinBunrui')
            .as('shohinSum')
        )
        .selectAll()
        .where('cntShohin', '=', 4)
        .as('shohinSum2')
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
select *
from (
select "shohin_bunrui",
   count(*) as "cnt_shohin"
from "shohin"
group by "shohin_bunrui") as "shohin_sum"
where "cnt_shohin" = $1) as "shohin_sum2"
パラメータ: [ 4 ]
実行時間: 9.769749999999988 ms

[
  {
    shohinBunrui: "キッチン用品",
    cntShohin: "4",
  }
]
 */
