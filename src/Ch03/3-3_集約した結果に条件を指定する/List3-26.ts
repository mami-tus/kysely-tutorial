import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => ['shohinBunrui', eb.fn.countAll<number>().as('count')])
    .where('shohinBunrui', '=', '衣服')
    .groupBy('shohinBunrui')
    .execute();

  console.log(result);
}
getShohin();

/**
SQL:
select "shohin_bunrui",
   count(*) as "count"
from "shohin"
where "shohin_bunrui" = $1
group by "shohin_bunrui"
パラメータ: [ "衣服" ]
　
---
[
  {
    shohinBunrui: "衣服",
    count: "2",
  }
]

集約キーに対する条件はHAVING句ではなくWHERE句で指定する
WHERE＝行に対する条件指定
HAVING＝集約した結果（グループ）に対する条件指定
 */
