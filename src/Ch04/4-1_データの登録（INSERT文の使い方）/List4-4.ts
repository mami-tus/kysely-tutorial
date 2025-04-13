import { db } from '../../kysely/database';

// アロー関数式による定義
const insertShohin = async () => {
  const result = await db
    .insertInto('shohinIns')
    .values({
      shohinId: '0006',
      shohinMei: 'フォーク',
      shohinBunrui: 'キッチン用品',
      hanbaiTanka: 500,
      shiireTanka: null,
      torokubi: new Date('2009-09-20'),
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
   $4,
   $5,
   $6)
パラメータ: [ "0006", "フォーク", "キッチン用品", 500, null, 2009-09-20T00:00:00.000Z ]
 */
