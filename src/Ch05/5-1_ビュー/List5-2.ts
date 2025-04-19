import { db } from '../../kysely/database';

const createShohinView = async () => {
  const result = await db.schema
    .createView('shohinSum')
    .columns(['shohinBunrui', 'cntShohin'])
    .as(
      db
        .selectFrom('shohin')
        .select(['shohinBunrui', db.fn.countAll().as('cntShohin')])
        .groupBy('shohinBunrui')
    )
    .execute();

  console.log(result);
};

createShohinView();

/**
 *
🟢 クエリ実行:
SQL: create view "shohin_sum" ("shohin_bunrui",
   "cnt_shohin") as
select "shohin_bunrui",
   count(*) as "cnt_shohin"
from "shohin"
group by "shohin_bunrui"
パラメータ: []
実行時間: 4.004541000000003 ms
 */
