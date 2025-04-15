import { db } from '../../kysely/database';

const transactionShohin = async () => {
  const trxResult = await db.transaction().execute(async (trx) => {
    const result1 = await trx
      .updateTable('shohin')
      .set((eb) => ({ hanbaiTanka: eb('hanbaiTanka', '-', 1000) }))
      .where('shohinMei', '=', 'カッターシャツ')
      .executeTakeFirstOrThrow();
    console.log('result1:', result1);

    const result2 = await trx
      .updateTable('shohin')
      .set((eb) => ({ hanbaiTanka: eb('hanbaiTanka', '+', 1000) }))
      .where('shohinMei', '=', 'Tシャツ')
      .executeTakeFirstOrThrow();
    console.log('result2:', result2);
  });
  console.log('trxResult:', trxResult);
};

transactionShohin();

/**
  クエリ実行:
SQL: begin
パラメータ: []
実行時間: 0.933415999999994 ms


🟢 クエリ実行:
SQL:
update "shohin"
set "hanbai_tanka" = "hanbai_tanka" - $1
where "shohin_mei" = $2
パラメータ: [ 1000, "カッターシャツ" ]
実行時間: 1.6651659999999993 ms

result1: UpdateResult {
  numUpdatedRows: 0n,
  numChangedRows: undefined,
}

🟢 クエリ実行:
SQL:
update "shohin"
set "hanbai_tanka" = "hanbai_tanka" + $1
where "shohin_mei" = $2
パラメータ: [ 1000, "Tシャツ" ]
実行時間: 0.5664579999999972 ms

result2: UpdateResult {
  numUpdatedRows: 1n,
  numChangedRows: undefined,
}

🟢 クエリ実行:
SQL: commit
パラメータ: []
実行時間: 0.899833000000001 ms

trxResult: undefined

---
// 失敗した場合

🟢 クエリ実行:
SQL: begin
パラメータ: []
実行時間: 0.9070830000000001 ms


🟢 クエリ実行:
SQL: rollback
パラメータ: []
実行時間: 0.7160420000000158 ms

1 | import { db } from '../../kysely/database';
2 |
3 | const transactionShohin = async () => {
4 |   const trxResult = await db.transaction().execute(async (trx) => {
5 |     console.log('trxResult最初:', trxResult);
                                            ^
ReferenceError: Cannot access 'trxResult' before initialization.
      at <anonymous> (/Users/mamitus/dev/kysely-tutorial/src/Ch04/4-4_トランザクション/List4-21.ts:5:41)
      at <anonymous> (/Users/mamitus/dev/kysely-tutorial/src/Ch04/4-4_トランザクション/List4-21.ts:4:59)
      at <anonymous> (/Users/mamitus/dev/kysely-tutorial/node_modules/kysely/dist/esm/kysely.js:436:38)
 */
