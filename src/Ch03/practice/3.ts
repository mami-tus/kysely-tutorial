import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .selectAll()
    .orderBy(['torokubi desc', 'hanbaiTanka'])
    .execute();

  console.log(result);
}
getShohin();

/**
🟢 クエリ実行:
SQL:
select *
from "shohin"
order by "torokubi" desc
パラメータ: []
実行時間: 2.343875000000004 ms
 */
