import { db } from '../../kysely/database';

const dropView = async () => {
  const result = await db.schema.dropView('shohinSum').execute();
  console.log(result);
};
dropView();

/**
🟢 クエリ実行:
SQL: drop view "shohin_sum"
パラメータ: []
実行時間: 3.7770830000000046 ms
 */
