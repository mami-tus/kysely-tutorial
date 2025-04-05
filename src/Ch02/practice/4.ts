import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select([
      'shohinMei',
      'shohinBunrui',
      sql`hanbai_tanka * 0.9 - shiire_tanka`.as('rieki'),
    ])
    // 事務用品かキッチン用品
    .where((eb) =>
      eb.or([
        eb('shohinBunrui', '=', '事務用品'),
        eb('shohinBunrui', '=', 'キッチン用品'),
      ])
    )
    // 利益が100円以上
    .where(
      sql`${sql.ref('hanbai_tanka')} * 0.9 - ${sql.ref('shiire_tanka')}`,
      '>',
      100
    )
    .execute();

  console.log(result);
}
getShohin();
