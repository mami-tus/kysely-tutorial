import { db } from '../../kysely/database';

const updateShohin = async () => {
  const result = await db
    .updateTable('shohin')
    .set({
      torokubi: null,
    })
    .where('shohinId', '=', '0008')
    .executeTakeFirst();
  console.log(result);
};

updateShohin();

/**
🟢 クエリ実行:
SQL:
update "shohin"
set "torokubi" = $1
where "shohin_id" = $2
パラメータ: [ null, "0008" ]
実行時間: 2.444958999999997 ms

UpdateResult {
  numUpdatedRows: 1n,
  numChangedRows: undefined,
}
 */
