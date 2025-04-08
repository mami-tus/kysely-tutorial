import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      'shohinMei',
      'shiireTanka',
      eb.fn.countAll<number>().as('shiireTankaCount'),
    ])
    .groupBy('shiireTanka')
    .execute();

  console.log(result);
}
getShohin();

/**
error: column "shohin.shohin_mei" must appear in the GROUP BY clause or be used in an aggregate function

GROUP BY句を使う時は、SELECT句に集約キー以外の列名をかけない
 */
