import { db } from '../../kysely/database';

// アロー関数式による定義
const insertShohin = async () => {
  const result = await db
    .insertInto('shohinIns')
    .values({
      shohinId: '0001',
      shohinMei: 'Tシャツ',
      shohinBunrui: '衣服',
      hanbaiTanka: 1000,
      shiireTanka: 500,
      torokubi: new Date('2009-09-20'),
    })
    .execute();
  console.log(result);
};

// 実行
insertShohin();

/**
 * アロー関数と通常の関数宣言の主な違い：
 * 1. this の振る舞い: アロー関数は親スコープのthisを継承、通常関数は呼び出し元に依存
 * 2. 構文の違い: アロー関数はより簡潔に書ける（特に一行の場合）
 * 3. 名前: 関数宣言は自身の名前を持つが、変数に格納されたアロー関数は変数名が関数名
 * 4. 巻き上げ(hoisting): 関数宣言は巻き上げられるが、アロー関数式は巻き上げられない
 */

/**
SQL:
insert into "shohin_ins" ("shohin_id",
   "shohin_mei",
   "shohin_bunrui",
   "hanbai_tanka",
   "shiire_tanka",
   "torokubi") values ($1,
   $2,
   $3,
   $4,
   $5,
   $6)
パラメータ: [ "0001", "Tシャツ", "衣服", 1000, 500, 2009-09-20T00:00:00.000Z ]

[
  InsertResult {
    insertId: undefined,
    numInsertedOrUpdatedRows: 1n,
  }
]
 */
