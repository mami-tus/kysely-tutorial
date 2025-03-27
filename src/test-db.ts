import { db } from './kysely/database';
import { faker } from '@faker-js/faker';

async function main() {
  try {
    console.log('🔍 データベース接続テスト開始');

    // 1. テストユーザーの作成
    console.log('➕ ユーザーを作成中...');
    const newUser = await db
      .insertInto('users')
      .values({
        email: faker.internet.email(),
        name: 'テストユーザー',
      })
      .returningAll()
      .executeTakeFirstOrThrow();

    console.log('✅ ユーザー作成成功:', newUser);

    // 2. ユーザー一覧の取得
    console.log('🔍 全ユーザーを取得中...');
    const allUsers = await db.selectFrom('users').selectAll().execute();

    console.log('📋 ユーザー一覧:', allUsers);

    // 3. ユーザー情報の更新
    console.log('✏️ ユーザー情報を更新中...');
    const updatedUser = await db
      .updateTable('users')
      .set({ name: '更新済みユーザー' })
      .where('id', '=', newUser.id)
      .returningAll()
      .executeTakeFirstOrThrow();

    console.log('✅ ユーザー更新成功:', updatedUser);

    // 4. ユーザーの削除
    console.log('🗑️ ユーザーを削除中...');
    const deletedUser = await db
      .deleteFrom('users')
      .where('id', '=', newUser.id)
      .returningAll()
      .executeTakeFirst();

    console.log('✅ ユーザー削除成功:', deletedUser);

    console.log('🎉 全てのテストが成功しました！');
  } catch (error) {
    console.error('❌ エラー:', error);
  } finally {
    // 必ず接続を閉じる
    await db.destroy();
  }
}

main();
