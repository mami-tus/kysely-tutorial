import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => [
      'shohinBunrui',
      eb.fn.countAll<number>().as('shohinBunruiCount'),
    ])
    .groupBy('shohinBunrui')
    .having('shohinMei', '=', 'ボールペン')
    .execute();

  console.log(result);
}
getShohin();

/**
🔴 クエリエラー:
SQL:
select "shohin_bunrui",
   count(*) as "shohin_bunrui_count"
from "shohin"
group by "shohin_bunrui"
having "shohin_mei" = $1
パラメータ: [ "ボールペン" ]
エラー: 541 |         this.message = message;
542 |         this.name = 'notice';
543 |     }
544 | }
545 | exports.NoticeMessage = NoticeMessage;
                      ^
error: column "shohin.shohin_mei" must appear in the GROUP BY clause or be used in an aggregate function
 */
