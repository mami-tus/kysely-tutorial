import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    .select((eb) => ['shiireTanka', eb.fn.countAll<number>().as('count')])
    .groupBy('shiireTanka')
    .execute();

  console.log(result);
}
getShohin();

/**
select "shiire_tanka",
   count(*) as "count"
from "shohin"
group by "shiire_tanka"

---

[
  {
    shiireTanka: null,
    count: "2",
  }, {
    shiireTanka: 320,
    count: "1",
  }, {
    shiireTanka: 500,
    count: "1",
  }, {
    shiireTanka: 2800,
    count: "2",
  }, {
    shiireTanka: 5000,
    count: "1",
  }, {
    shiireTanka: 790,
    count: "1",
  }
]
  集約キーにNULLが含まれている場合、NULLは1つのグループとして扱われる
 */
