import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) =>
      eb.fn.count<number>('shohinBunrui').distinct().as('shohinBunruiCount')
    )
    .execute();

  console.log(result);
}
getShohin();

/**
 * select count(distinct "shohin_bunrui") as "shohin_bunrui_count" from "shohin"
 */
