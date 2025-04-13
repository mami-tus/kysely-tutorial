import { db } from '../../kysely/database';

const deleteShohin = async () => {
  const result = await db
    .deleteFrom('shohin')
    .where('hanbaiTanka', '>=', 4000)
    .executeTakeFirst();
  console.log(result);
};

deleteShohin();

/**
🟢 クエリ実行:
SQL:
delete
from "shohin"
where "hanbai_tanka" >= $1
パラメータ: [ 4000 ]
実行時間: 2.4688750000000113 ms

DeleteResult {
  numDeletedRows: 2n,
}
 */
