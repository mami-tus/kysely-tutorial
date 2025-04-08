import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      'shohinBunrui',
      eb.fn.countAll<number>().as('shohinBunruiCount'),
    ])
    .where((eb) => eb.fn.countAll(), '=', 2)
    .groupBy('shohinBunrui')
    .execute();

  console.log(result);
}
getShohin();

/**
/**
error: aggregate functions are not allowed in WHERE
集約関数をかける場所はSELECT、HAVINGとORDER BYだけ
 */
