import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId', 'shohinMei', 'hanbaiTanka', 'shiireTanka'])
    .orderBy('shiireTanka')
    .execute();

  console.log(result);
}
getShohin();

/**
NULLは先行か末尾にまとめられる
 */
