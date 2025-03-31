import { db } from '../../kysely/database';

async function getShohin() {
  // 定数を使って列名を指定する
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      eb.val('商品').as('mojiretsu'),
      eb.val(38).as('suuchi'),
      eb.val('2009-02-24').as('hizuke'),
      'shohinId',
      'shohinMei',
    ])
    .execute();

  console.log(result);
}
getShohin();
