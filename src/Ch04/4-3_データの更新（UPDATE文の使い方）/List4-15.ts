import { db } from '../../kysely/database';

const updateShohin = async () => {
  const result = await db
    .updateTable('shohin')
    .set({
      torokubi: new Date('2009-10-10'),
    })
    .executeTakeFirst();
  console.log(result);
};

updateShohin();

/**
SQL:
update "shohin" set "torokubi" = $1
パラメータ: [
  2009-10-10T00:00:00.000Z
]
実行時間: 5.263750000000002 ms

UpdateResult {
  numUpdatedRows: 6n,
  numChangedRows: undefined,
}
 */
