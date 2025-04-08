import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    // count(shohinBunrui)じゃなくて count(*)でいいのはなんで?
    // 理由: 1) shohinBunruiはNULL制約があるためどちらも同じ結果になる
    // 2) COUNT(*)は全行をカウントする標準的な方法でパフォーマンス最適化されている場合が多い
    // 3) グループごとの行数を数える意図が明確になる
    .select((eb) => ['shohinBunrui', eb.fn.countAll<number>().as('count')])
    .groupBy('shohinBunrui')
    .execute();

  console.log(result);
}
getShohin();

/**
 * select "shohin_bunrui",
   count(*) as "count"
from "shohin"
group by "shohin_bunrui"
 */
