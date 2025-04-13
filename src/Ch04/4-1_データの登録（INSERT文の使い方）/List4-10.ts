import { db } from '../../kysely/database';

const insertShohin = async () => {
  const result = await db
    .insertInto('shohinBunrui')
    // 挿入先テーブルのどのカラムにデータを入れるかを指定します。配列の順序が重要で、後のSELECT文の結果列と順序が対応します。
    .columns(['shohinBunrui', 'sumHanbaiTanka', 'sumShiireTanka'])
    // VALUES句の代わりに式（この場合はSELECT文）を使用することを指定します。ebは「expression builder」のことで、式構築のためのヘルパーです。
    .expression((eb) =>
      eb
        .selectFrom('shohin')
        .select([
          'shohinBunrui',
          (eb) => eb.fn.sum<number>('hanbaiTanka').as('sumHanbaiTanka'),
          (eb) => eb.fn.sum<number>('shiireTanka').as('sumShiireTanka'),
        ])
        .groupBy('shohinBunrui')
    )
    .execute();
  console.log(result);
};

// 実行
insertShohin();

/**
SQL:
insert into "shohin_bunrui" ("shohin_bunrui",
   "sum_hanbai_tanka",
   "sum_shiire_tanka")
select "shohin_bunrui",
   sum("hanbai_tanka") as "sum_hanbai_tanka",
   sum("shiire_tanka") as "sum_shiire_tanka"
from "shohin"
group by "shohin_bunrui"
パラメータ: []
実行時間: 3.2142089999999968 ms

*/
