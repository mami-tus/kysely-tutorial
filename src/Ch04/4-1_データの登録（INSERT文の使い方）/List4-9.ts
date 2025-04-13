import { db } from '../../kysely/database';

const insertShohin = async () => {
  const result = await db
    .insertInto('shohinCopy')
    // 挿入先テーブルのどのカラムにデータを入れるかを指定します。配列の順序が重要で、後のSELECT文の結果列と順序が対応します。
    .columns([
      'shohinId',
      'shohinMei',
      'shohinBunrui',
      'hanbaiTanka',
      'shiireTanka',
      'torokubi',
    ])
    // VALUES句の代わりに式（この場合はSELECT文）を使用することを指定します。ebは「expression builder」のことで、式構築のためのヘルパーです。
    .expression((eb) =>
      eb
        .selectFrom('shohin')
        .select([
          'shohinId',
          'shohinMei',
          'shohinBunrui',
          'hanbaiTanka',
          'shiireTanka',
          'torokubi',
        ])
    )
    .execute();

  // 両方のテーブルのカラムが同一の場合以下でもOK
  // const result = await db
  //   .insertInto('shohinCopy')
  //   // VALUES句の代わりに式（この場合はSELECT文）を使用することを指定します。ebは「expression builder」のことで、式構築のためのヘルパーです。
  //   .expression((eb) => eb.selectFrom('shohin').selectAll())
  //   .execute();
  console.log(result);
};

// 実行
insertShohin();

/**
 * refs: https://kysely-org.github.io/kysely-apidoc/classes/InsertQueryBuilder.html#expression
 *
  クエリ実行:
SQL:
insert into "shohin_copy" ("shohin_id",
   "shohin_mei",
   "shohin_bunrui",
   "hanbai_tanka",
   "shiire_tanka",
   "torokubi")
select "shohin_id",
   "shohin_mei",
   "shohin_bunrui",
   "hanbai_tanka",
   "shiire_tanka",
   "torokubi"
from "shohin"
パラメータ: []
実行時間: 2.257415999999999 ms

*/
