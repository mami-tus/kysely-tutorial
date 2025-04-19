import { db } from '../../kysely/database';

const createView = async () => {
  const result = await db.schema
    .createView('shohinJim')
    .columns([
      'shohinId',
      'shohinMei',
      'shohinBunrui',
      'hanbaiTanka',
      'shiireTanka',
      'torokubi',
    ])
    .as(
      db.selectFrom('shohin').selectAll().where('shohinBunrui', '=', '事務用品')
    )
    .execute();

  console.log(result);
};

createView();

/**
 *
🟢 クエリ実行:
SQL: create view "shohin_jim" ("shohin_id",
   "shohin_mei",
   "shohin_bunrui",
   "hanbai_tanka",
   "shiire_tanka",
   "torokubi") as
select *
from "shohin"
where "shohin_bunrui" = '事務用品'
パラメータ: []
実行時間: 4.488416000000001 ms
 */
