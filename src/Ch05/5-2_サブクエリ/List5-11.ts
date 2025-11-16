import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    // .as()がないと、Kyselyが結果オブジェクトのプロパティ名を決定できず、TypeScriptが型を推論できない
    .select((eb) => eb.fn.avg<number>('hanbaiTanka').as('avgHanbaiTanka'))
    .execute();

  console.log(result);
}
getShohin();

/**
 * 🟢 クエリ実行:
SQL:
select avg("hanbai_tanka") as "avg_hanbai_tanka"
from "shohin"
パラメータ: []
実行時間: 4.680624999999992 ms

[
  {
    avgHanbaiTanka: "2097.5000000000000000",
  }
]
 */
