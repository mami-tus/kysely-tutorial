import { sql } from 'kysely';
import { db } from '../../kysely/database';

async function getShohin() {
  const result = await db
    .selectFrom('shohin')
    // numberで出力したい場合型を指定する
    //  https://kysely-org.github.io/kysely-apidoc/interfaces/FunctionModule.html#countAll
    .select((eb) => eb.fn.count<number>('shiireTanka').as('count'))
    .execute();

  console.log(result);
}
getShohin();
