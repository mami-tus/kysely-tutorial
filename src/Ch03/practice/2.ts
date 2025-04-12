import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      eb.fn.sum<number>('hanbaiTanka').as('hanbaiTankaSum'),
      eb.fn.sum<number>('shiireTanka').as('shiireTankaSum'),
    ])
    // 正しい書き方：ダブルクォートでカラム名を囲む
    .having(sql<boolean>`sum("hanbai_tanka") * 1.5 > sum("shiire_tanka")`)
    .execute();

  console.log(result);
}
getShohin();

/**
 * 販売単価の合計の1.5倍が仕入れ単価の合計より大きいものを求める
 *
 * SQL:
 * SELECT
 *   SUM(hanbai_tanka) AS hanbai_tanka_sum,
 *   SUM(shiire_tanka) AS shiire_tanka_sum
 * FROM shohin
 * HAVING SUM(hanbai_tanka) * 1.5 > SUM(shiire_tanka)
 */
