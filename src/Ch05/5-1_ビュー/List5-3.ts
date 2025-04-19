import { db } from '../../kysely/database';

const getShohinSum = async () => {
  const result = await db
    .selectFrom('shohinSum')
    .select(['shohinBunrui', 'cntShohin'])
    .execute();

  console.log(result);
};

getShohinSum();

/**
 *
  クエリ実行:
SQL:
select "shohin_bunrui",
   "cnt_shohin"
from "shohin_sum"
パラメータ: []
実行時間: 3.062708999999998 ms

[
  {
    shohinBunrui: "事務用品",
    cntShohin: "2",
  }, {
    shohinBunrui: "衣服",
    cntShohin: "2",
  }, {
    shohinBunrui: "キッチン用品",
    cntShohin: "4",
  }
]
 */
