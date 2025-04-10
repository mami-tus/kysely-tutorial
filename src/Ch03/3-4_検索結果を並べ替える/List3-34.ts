import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => ['shohinBunrui', eb.fn.countAll<number>().as('count')])
    .groupBy('shohinBunrui')
    .orderBy((eb) => eb.fn.countAll()) // 集計結果の降順でソート
    .execute();

  console.log(result);
}
getShohin();

/**
SQL:
select "shohin_bunrui",
   count(*) as "count"
from "shohin"
group by "shohin_bunrui"
order by count(*) desc

集計関数の結果でソートするには、orderBy句でもexpression builderを使って集計関数を指定する
 */
