import type { DB } from './db'; // this is the Database interface we defined earlier
import { Pool } from 'pg';
import { CamelCasePlugin, Kysely, PostgresDialect } from 'kysely';

// SQLクエリを見やすく整形する関数
function formatSql(sql: string): string {
  // 簡易的なSQL整形（キーワードの後に改行を入れる）
  return sql
    .replace(
      /\b(SELECT|FROM|WHERE|ORDER BY|GROUP BY|HAVING|JOIN|LEFT JOIN|RIGHT JOIN|INNER JOIN|LIMIT|OFFSET|UNION|INSERT|UPDATE|DELETE)\b/gi,
      '\n$1'
    )
    .replace(/,/g, ',\n  ');
}

// クエリパラメータ内の機密情報をマスクする関数
function maskPII(value: unknown): unknown {
  if (
    typeof value === 'string' &&
    (value.toLowerCase().includes('password') ||
      value.toLowerCase().includes('token') ||
      value.length > 50)
  ) {
    return '***masked***';
  }
  return value;
}

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'kysely_tutorial',
    host: 'localhost',
    user: 'postgres',
    password: 'postgres',
    port: 5433,
    max: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<DB>({
  dialect,
  plugins: [new CamelCasePlugin()],
  log(event) {
    if (event.level === 'error') {
      console.error('\n🔴 クエリエラー:');
      console.error('SQL:', formatSql(event.query.sql));
      console.error('パラメータ:', event.query.parameters.map(maskPII));
      console.error('エラー:', event.error);
      console.error('実行時間:', event.queryDurationMillis, 'ms\n');
    } else {
      // 'query'
      console.log('\n🟢 クエリ実行:');
      console.log('SQL:', formatSql(event.query.sql));
      console.log('パラメータ:', event.query.parameters.map(maskPII));
      console.log('実行時間:', event.queryDurationMillis, 'ms\n');
    }
  },
});
