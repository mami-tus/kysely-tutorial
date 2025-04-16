import { db } from '../../kysely/database';

const transactionShohin = async () => {
  const trxResult = await db.transaction().execute(async (trx) => {
    const result1 = await trx
      .insertInto('shohin')
      .values([
        {
          shohinId: '0001',
          shohinMei: 'Tシャツ',
          shohinBunrui: '衣服',
          hanbaiTanka: 1000,
          shiireTanka: 500,
          torokubi: new Date('2008-09-20'),
        },
        {
          shohinId: '0002',
          shohinMei: '穴あけパンチ',
          shohinBunrui: '文房具',
          hanbaiTanka: 500,
          shiireTanka: 320,
          torokubi: new Date('2008-09-11'),
        },
        {
          shohinId: '0003',
          shohinMei: 'カッターシャツ',
          shohinBunrui: '衣服',
          hanbaiTanka: 4000,
          shiireTanka: 2800,
          torokubi: null,
        },
      ])
      .executeTakeFirstOrThrow();
    console.log('result1:', result1);
  });
  console.log('trxResult:', trxResult);
};

transactionShohin();
