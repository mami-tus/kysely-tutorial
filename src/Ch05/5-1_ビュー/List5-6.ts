import { db } from '../../kysely/database';

const insertShohinJim = async () => {
  const result = await db
    .insertInto('shohinJim')
    .values([
      {
        shohinId: '0009',
        shohinMei: '印鑑',
        shohinBunrui: '事務用品',
        hanbaiTanka: 95,
        shiireTanka: 10,
        torokubi: new Date('2009-11-30'),
      },
    ])
    .executeTakeFirst();
  console.log(result);
};

insertShohinJim();

/**
🟢 クエリ実行:
SQL:
insert into "shohin_jim" ("shohin_id",
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
パラメータ: [ "0009", "印鑑", "事務用品", 95, 10, 2009-11-30T00:00:00.000Z ]
実行時間: 3.646000000000001 ms

InsertResult {
  insertId: undefined,
  numInsertedOrUpdatedRows: 1n,
}
 */
