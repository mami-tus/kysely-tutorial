import { db } from '../../kysely/database';

const deleteShohin = async () => {
  const result = await db.deleteFrom('shohin').executeTakeFirst();
  console.log(result);
};

deleteShohin();

/**
 * 🟢 クエリ実行:
SQL:
delete
from "shohin"
パラメータ: []
実行時間: 3.633250000000004 ms

DeleteResult {
  numDeletedRows: 8n,
}
 */
