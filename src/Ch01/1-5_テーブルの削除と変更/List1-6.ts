import { db } from '../../kysely/database';

async function insertIntoShohin() {
  // Shohinテーブルにデータを挿入する
  const result = await db
    .insertInto('shohin')
    .values([
      {
        shohinId: '0001',
        shohinMei: 'Tシャツ',
        shohinBunrui: '衣服',
        hanbaiTanka: 1000,
        shiireTanka: 500,
        torokubi: new Date('2009-09-20'),
      },
      {
        shohinId: '0002',
        shohinMei: '穴あけパンチ',
        shohinBunrui: '事務用品',
        hanbaiTanka: 500,
        shiireTanka: 320,
        torokubi: new Date('2009-09-11'),
      },
      {
        shohinId: '0003',
        shohinMei: 'カッターシャツ',
        shohinBunrui: '衣服',
        hanbaiTanka: 4000,
        shiireTanka: 2800,
        torokubi: null,
      },
      {
        shohinId: '0004',
        shohinMei: '包丁',
        shohinBunrui: 'キッチン用品',
        hanbaiTanka: 3000,
        shiireTanka: 2800,
        torokubi: new Date('2009-09-20'),
      },
      {
        shohinId: '0005',
        shohinMei: '圧力鍋',
        shohinBunrui: 'キッチン用品',
        hanbaiTanka: 6800,
        shiireTanka: 5000,
        torokubi: new Date('2009-01-15'),
      },

      {
        shohinId: '0006',
        shohinMei: 'フォーク',
        shohinBunrui: 'キッチン用品',
        hanbaiTanka: 500,
        shiireTanka: null,
        torokubi: new Date('2009-09-20'),
      },
      {
        shohinId: '0007',
        shohinMei: 'おろしがね',
        shohinBunrui: 'キッチン用品',
        hanbaiTanka: 880,
        shiireTanka: 790,
        torokubi: new Date('2008-04-28'),
      },
      {
        shohinId: '0008',
        shohinMei: 'ボールペン',
        shohinBunrui: '事務用品',
        hanbaiTanka: 100,
        shiireTanka: null,
        torokubi: new Date('2009-11-11'),
      },
    ])
    .returningAll()
    .execute();
  console.log('データを挿入しました。');
  console.log(result);
}

await insertIntoShohin();
