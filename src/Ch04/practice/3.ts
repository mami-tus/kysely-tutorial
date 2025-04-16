import { sql } from 'kysely';
import { db } from '../../kysely/database';

const insertShohinSaeki = async () => {
  const result = await db
    .insertInto('shohinSaeki')
    // 挿入先テーブルのどのカラムにデータを入れるかを指定します。配列の順序が重要で、後のSELECT文の結果列と順序が対応します。
    .columns(['shohinId', 'shohinMei', 'hanbaiTanka', 'shiireTanka', 'saeki'])
    // VALUES句の代わりに式（この場合はSELECT文）を使用することを指定します。ebは「expression builder」のことで、式構築のためのヘルパーです。
    .expression((eb) =>
      eb
        .selectFrom('shohin')
        .select([
          'shohinId',
          'shohinMei',
          'hanbaiTanka',
          'shiireTanka',
          sql<number>`hanbai_tanka - shiire_tanka`.as('saeki'),
        ])
    )
    .execute();

  console.log(result);
};

// 実行
insertShohinSaeki();

/**
 *   クエリ実行:
SQL:
insert into "shohin_saeki" ("shohin_id",
   "shohin_mei",
   "hanbai_tanka",
   "shiire_tanka",
   "saeki")
select "shohin_id",
   "shohin_mei",
   "hanbai_tanka",
   "shiire_tanka",ss
   hanbai_tanka - shiire_tanka as "saeki"
from "shohin"
パラメータ: []
実行時間: 2.871167 ms

[
  InsertResult {
    insertId: undefined,
    numInsertedOrUpdatedRows: 3n,
  }
]
 */
