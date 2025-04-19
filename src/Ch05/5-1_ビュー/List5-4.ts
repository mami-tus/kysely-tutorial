import { db } from '../../kysely/database';

const createView = async () => {
  const result = await db.schema
    .createView('shohinSumJim')
    .columns(['shohinBunrui', 'cntShohin'])
    .as(
      db
        .selectFrom('shohinSum')
        .select(['shohinBunrui', 'cntShohin'])
        .where('shohinBunrui', '=', '事務用品')
    )
    .execute();

  console.log(result);
};

createView();

/**
 *
🟢 クエリ実行:
SQL: create view "shohin_sum_jim" ("shohin_bunrui",
   "cnt_shohin") as
select "shohin_bunrui",
   "cnt_shohin"
from "shohin_sum"
where "shohin_bunrui" = '事務用品'
パラメータ: []
実行時間: 4.151208000000011 ms
 */
