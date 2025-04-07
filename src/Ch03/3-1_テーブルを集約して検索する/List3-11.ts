import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    // 集約関数はnullを除外する。count(*)は例外的に除外しない。
    .select((eb) => eb.fn.sum<number>('hanbaiTanka').as('hanbaiTankaSum'))
    .select((eb) =>
      eb.fn.sum<number>('hanbaiTanka').distinct().as('hanbaiTankaDistinctSum')
    )
    .execute();

  console.log(result);
}
getShohin();

/**
 * [
  {
    hanbaiTankaSum: "16780",
    hanbaiTankaDistinctSum: "16280",
  }
]
  500円の商品が2つあるので重複が解消され500円引かれている。
 */
