import { sql } from 'kysely';
import { db } from '../../kysely/database';

const transactionShohinSaeki = async () => {
  const trxResult = await db.transaction().execute(async (trx) => {
    const result1 = await trx
      .updateTable('shohinSaeki')
      .set({
        hanbaiTanka: 3000,
      })
      .where('shohinId', '=', '0003')
      .executeTakeFirstOrThrow();
    console.log('result1:', result1);

    const result2 = await trx
      .updateTable('shohinSaeki')
      .set({
        saeki: sql<number>`hanbai_tanka - shiire_tanka`,
      })
      .where('shohinId', '=', '0003')
      .executeTakeFirstOrThrow();
    console.log('result2:', result2);
  });
  console.log('trxResult:', trxResult);
};

transactionShohinSaeki();

/**
  * 🟢 クエリ実行:
SQL: begin
パラメータ: []
実行時間: 1.1991660000000053 ms


🟢 クエリ実行:
SQL:
update "shohin_saeki"
set "hanbai_tanka" = $1
where "shohin_id" = $2
パラメータ: [ 3000, "0003" ]
実行時間: 2.602374999999995 ms

result1: UpdateResult {
  numUpdatedRows: 1n,
  numChangedRows: undefined,
}

🟢 クエリ実行:
SQL:
update "shohin_saeki"
set "saeki" = hanbai_tanka - shiire_tanka
where "shohin_id" = $1
パラメータ: [ "0003" ]
実行時間: 0.49875000000000114 ms

result2: UpdateResult {
  numUpdatedRows: 1n,
  numChangedRows: undefined,
}

🟢 クエリ実行:
SQL: commit
パラメータ: []
実行時間: 0.6967499999999944 ms

trxResult: undefined
  */
