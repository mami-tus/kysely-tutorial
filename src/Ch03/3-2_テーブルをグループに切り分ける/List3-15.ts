import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => ['shiireTanka', eb.fn.countAll<number>().as('count')])
    .where('shohinBunrui', '=', '衣服')
    .groupBy('shiireTanka')
    .execute();

  console.log(result);
}
getShohin();

/**
select "shiire_tanka",
   count(*) as "count"
from "shohin"
where "shohin_bunrui" = $1
group by "shiire_tanka"
パラメータ: [ "衣服" ]

---
[
  {
    shiireTanka: 500,
    count: "1",
  }, {
    shiireTanka: 2800,
    count: "1",
  }
]
 */
