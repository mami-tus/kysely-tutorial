import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      'shohinBunrui as sb',
      eb.fn.countAll<number>().as('shohinBunruiCount'),
    ])
    .groupBy('sb')
    .execute();

  console.log(result);
}
getShohin();

/**
SELECTがGROUP BYよりもあとに実行されるので別名をGROUP BYに指定できない
PostgreSQLはエラーにならないが他のDBMSでは通じないため使わない方がいい
 */
