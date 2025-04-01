import { db } from '../../kysely/database';

async function getShohin() {
  // DISTINCTを使って重複を排除する
  /**
   * nullも一つにまとめられる
   * [
  {
    shohinBunrui: "衣服",
    torokubi: null,
  }, {
    shohinBunrui: "キッチン用品",
    torokubi: 2009-01-14T15:00:00.000Z,
  }, {
    shohinBunrui: "衣服",
    torokubi: 2009-09-19T15:00:00.000Z,
  }, {
    shohinBunrui: "キッチン用品",
    torokubi: 2008-04-27T15:00:00.000Z,
  }, {
    shohinBunrui: "事務用品",
    torokubi: 2009-11-10T15:00:00.000Z,
  }, {
    shohinBunrui: "事務用品",
    torokubi: 2009-09-10T15:00:00.000Z,
  }, {
    shohinBunrui: "キッチン用品",
    torokubi: 2009-09-19T15:00:00.000Z,
  }
]
   */
  const result = await db
    .selectFrom('shohin')
    .select(['shohinBunrui', 'torokubi'])
    .distinct()
    .execute();
  console.log(result);
}
getShohin();
