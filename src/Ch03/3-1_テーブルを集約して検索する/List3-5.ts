import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    // 集約関数はnullを除外する。count(*)は例外的に除外しない。
    .select((eb) => eb.fn.sum<number>('hanbaiTanka').as('hanbaiTankaSum'))
    .select((eb) => eb.fn.sum<number>('shiireTanka').as('shiireTankaSum'))
    .execute();

  console.log(result);
}
getShohin();
