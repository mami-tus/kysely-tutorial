import { sql } from 'kysely';
import { db } from '../../kysely/database';

const updateShohin = async () => {
  const result = await db
    .updateTable('shohin')
    .set({
      hanbaiTanka: sql<number>`hanbai_tanka * 10`, // 10倍に変更
    })
    .where('shohinBunrui', '=', 'キッチン用品')
    .executeTakeFirst();
  console.log(result);
};

updateShohin();

/**
🟢 クエリ実行:
SQL:
update "shohin" set "hanbai_tanka" = hanbai_tanka * 10
where "shohin_bunrui" = $1
パラメータ: [ "キッチン用品" ]
実行時間: 3.3941250000000025 ms

UpdateResult {
  numUpdatedRows: 3n,
  numChangedRows: undefined,
}
 */
