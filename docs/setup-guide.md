# Kyselyチュートリアル セットアップガイド

## Kysely 公式の Getting started

- https://kysely.dev/docs/getting-started

1. まず TypeScriptTypeScript のプロジェクト初期化
2. スキーマを表現した型定義ファイルが必要だった

### 1. のプロジェクト初期化するために `bun init` した

- 参考: https://bun.sh/docs/quickstart

### 2. のスキーマ作成するために

- schema.prisma 生成のため `prisma init` した
  - https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql
- postgreSQL を Docker で立ち上げるために docker-compose.yml を作成した
  - `docker compose up -d` でローカルの DB が立ち上がる
- schema.prisma に model 定義追加

### 2. のスキーマから型定義を生成するため

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

### kysely-codegen を使った型定義生成手順

参考: https://github.com/RobinBlomberg/kysely-codegen

1. 必要なパッケージのインストール

```bash
bun add --save-dev kysely-codegen  # --save-devだとdevDependenciesにならない
bun add kysel
```

2. 型定義生成のための script を package.json に追加し、実行

```json
"scripts": {
    "kysely": "kysely-codegen --out-file ./src/kysely/db.d.ts --camel-case --runtime-enums=false"
  }
```

- ここで一旦 schema.prisma を DB に反映してないことに気づいたので
  以下を実行、script にも追加

```bash
bun prisma migrate dev --name init
```

マイグレーションファイルが生成&適用されていた

※ prisma migrate deploy: 既存のマイグレーションファイルのみを適用、生成しない

※ prisma db push: マイグレーションファイルを生成せず直接反映

再度 `bun kysely` で型定義生成された

### Kysely 公式の Getting started の Instantiation をやる

- https://kysely.dev/docs/getting-started#instantiation
  とりあえず公式通り`database.ts` に Kysely インスタンスを作る

- import エラー出てたので以下実行（公式になんで書いてないんだ？）

```bash
bun add -d @types/pg
```

- データベース操作をキャメルケースで扱いたかったので `CamelCasePlugin` も設定
- 一旦動くか見たかったので `src/test-db.ts` を定義した
- 設定で`password` パラメータなくてエラー出た、 PostgreSQL がパスワードなしで設定されることもあるから必須のパラメータではなかったよう
- 設定したら実行できた