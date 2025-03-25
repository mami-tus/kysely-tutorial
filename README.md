# kysely-tutorial

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.2. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## メモ

- プロジェクト初期化するために `bun init` した
  - 参考: https://bun.sh/docs/quickstart
- schema.prisma 生成のため `prisma init` した
  - https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql
- postgreSQL を Docker で立ち上げるために docker-compose.yml を作成した
  - `docker compose up -d` でローカルの DB が立ち上がる
- schema.prisma に model 定義追加
- Kysely の型定義の生成方法を検討した
  - prisma-kysely
    - ソース: Prisma スキーマファイル
    - 流れ: Prisma スキーマ → Kysely 型定義
    - ワークフロー:
      1. Prisma スキーマを定義/更新
      2. prisma generate を実行（Kysely 型も自動生成）
      3. prisma migrate で DB を更新
      4. 生成された型を使って Kysely でクエリ作成
    - 特徴:
      - Prisma のスキーマ定義がプロジェクトの中心
      - マイグレーションも Prisma で管理
      - スキーマファーストの開発スタイル
  - kysely-codegen
    - ソース: 実際のデータベース接続
    - 流れ: データベーススキーマ → Kysely 型定義
    - ワークフロー:
      1. データベーススキーマを更新（Prisma や他のツール、SQL など）
      2. データベース変更を適用
      3. kysely-codegen を実行して型を生成
      4. 生成された型を使って Kysely でクエリ作成
    - 特徴:
      - データベースが既に存在する
      - Prisma 以外のマイグレーションツールを使用
      - データベースファーストの開発スタイル
      - **Prisma への依存を避けたい** ← これ重要そうなの kysely-codegen を使う
- kysely-codegen を使った型定義生成手順
  参考: https://github.com/RobinBlomberg/kysely-codegen

1. 必要なパッケージのインストール

```bash
bun add --save-dev kysely-codegen
bun add kysely pg
```
