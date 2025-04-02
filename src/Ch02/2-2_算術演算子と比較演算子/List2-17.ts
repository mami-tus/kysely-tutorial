import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function calcShohin() {
  const result = await db
    .selectFrom('shohin')
    .select([
      'shohinMei',
      'hanbaiTanka',
      // 計算式は式ビルダーで構築
      sql`hanbai_tanka * 2`.as('hanbai_tanka_x2'),
    ])
    .execute();

  console.log(result);
}
calcShohin();
