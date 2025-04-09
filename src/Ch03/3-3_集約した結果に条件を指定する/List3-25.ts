import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => ['shohinBunrui', eb.fn.countAll<number>().as('count')])
    .groupBy('shohinBunrui')
    .having('shohinBunrui', '=', '衣服')
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
having "shohin_bunrui" = $1
パラメータ: [ "衣服" ]

---
[
  {
    shohinBunrui: "衣服",
    count: "2",
  }
]
 */
