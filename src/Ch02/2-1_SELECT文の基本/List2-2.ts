import { db } from '../../kysely/database';

async function getShohin() {
  // CREATE TABLEで定義した順で列が並ぶ
  const result = await db.selectFrom('shohin').selectAll().execute();

  console.log(result);
}
getShohin();
