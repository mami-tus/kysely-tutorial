import { sql } from 'kysely';
import { db } from '../../kysely/database';

const insertShohin = async () => {
  const result = await db
    .insertInto('shohinIns')
    .values({
      shohinId: '0007',
      shohinMei: 'おろしがね',
      shohinBunrui: 'キッチン用品',
      hanbaiTanka: sql`DEFAULT`,
      shiireTanka: 790,
      torokubi: new Date('2009-04-28'),
    })
    .execute();
  console.log(result);
};

// 実行
insertShohin();

/**
🟢 クエリ実行:
SQL:
insert into "shohin_ins" ("shohin_id",
   "shohin_mei",
   "shohin_bunrui",
   "hanbai_tanka",
   "shiire_tanka",
   "torokubi") values ($1,
   $2,
   $3,
   DEFAULT,
   $4,
   $5)
パラメータ: [ "0007", "おろしがね", "キッチン用品", 790, 2009-04-28T00:00:00.000Z ]
実行時間: 2.8503749999999997 ms
*/
