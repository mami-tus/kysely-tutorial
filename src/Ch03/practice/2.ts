import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      'shohinBunrui',
      eb.fn.sum<number>('hanbaiTanka').as('hanbaiTankaSum'),
      eb.fn.sum<number>('shiireTanka').as('shiireTankaSum'),
    ])
    .groupBy('shohinBunrui')
    // 正しい書き方：ダブルクォートでカラム名を囲むか、何もなし
    .having(sql<boolean>`sum("hanbai_tanka") > sum("shiire_tanka") * 1.5`)
    .execute();

  console.log(result);
}
getShohin();

/**
 * havingメソッドに渡す条件式が論理値（boolean）を返す必要があるのでsql<boolean>で渡す
 *
SQL:
select "shohin_bunrui",
   sum("hanbai_tanka") as "hanbai_tanka_sum",
   sum("shiire_tanka") as "shiire_tanka_sum"
from "shohin"
group by "shohin_bunrui"
having sum("hanbai_tanka") > sum("shiire_tanka") * 1.5
 */
