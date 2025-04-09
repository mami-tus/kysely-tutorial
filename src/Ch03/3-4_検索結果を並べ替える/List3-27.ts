import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select(['shohinId', 'shohinMei', 'hanbaiTanka', 'shiireTanka'])

    .execute();

  console.log(result);
}
getShohin();

/**
 * 並び順は指定しない限りランダム
 * [
  {
    shohinId: "0001",
    shohinMei: "Tシャツ",
    hanbaiTanka: 1000,
    shiireTanka: 500,
  }, {
    shohinId: "0002",
    shohinMei: "穴あけパンチ",
    hanbaiTanka: 500,
    shiireTanka: 320,
  }, {
    shohinId: "0003",
    shohinMei: "カッターシャツ",
    hanbaiTanka: 4000,
    shiireTanka: 2800,
  }, {
    shohinId: "0004",
    shohinMei: "包丁",
    hanbaiTanka: 3000,
    shiireTanka: 2800,
  }, {
    shohinId: "0005",
    shohinMei: "圧力鍋",
    hanbaiTanka: 6800,
    shiireTanka: 5000,
  }, {
    shohinId: "0006",
    shohinMei: "フォーク",
    hanbaiTanka: 500,
    shiireTanka: null,
  }, {
    shohinId: "0007",
    shohinMei: "おろしがね",
    hanbaiTanka: 880,
    shiireTanka: 790,
  }, {
    shohinId: "0008",
    shohinMei: "ボールペン",
    hanbaiTanka: 100,
    shiireTanka: null,
  }
]
 */
