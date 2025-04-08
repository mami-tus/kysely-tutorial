import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      'shohinBunrui',
      eb.fn.countAll<number>().as('shohinBunruiCount'),
    ])
    .groupBy('shohinBunrui')
    .having((eb) => eb.fn.countAll(), '=', 2)
    .execute();

  console.log(result);
}
getShohin();

/**
SQL:
select "shohin_bunrui",
   count(*) as "shohin_bunrui_count"
from "shohin"
group by "shohin_bunrui"
having count(*) = $1
パラメータ: [ 2 ]
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
