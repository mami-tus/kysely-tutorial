import { db } from '../../kysely/database';

const insertShohin = async () => {
  const result = await db
    .insertInto('shohinIns')
    .values({
      shohinId: '0008',
      shohinMei: 'ボールペン',
      shohinBunrui: '事務用品',
      hanbaiTanka: 100,
      torokubi: new Date('2009-11-11'),
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
   "torokubi") values ($1,
   $2,
   $3,
   $4,
   $5)
パラメータ: [ "0008", "ボールペン", "事務用品", 100, 2009-11-11T00:00:00.000Z ]
実行時間: 4.060708000000005 ms

*/
