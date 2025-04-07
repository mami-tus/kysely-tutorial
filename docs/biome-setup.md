# Biome 導入手順

[Biome](https://biomejs.dev/)は JavaScript/TypeScript のための高速なフォーマッター・リンターです。ESLint や Prettier の代替として使用できます。

## 1. インストール

```bash
bun add -d @biomejs/biome
```

## 2. 設定ファイル作成（biome.json）

```bash
npx @biomejs/biome init
```

## 3. 設定ファイル編集

以下のような設定を`biome.json`に追加して、不要なインポートを自動的に削除するように設定:

```json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "vcs": {
    "enabled": false,
    "clientKind": "git",
    "useIgnoreFile": false
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": ["node_modules/**", "dist/**"]
  },
  "formatter": {
    "enabled": true,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": {
        "noUnusedImports": "error",
        "noUnusedVariables": "error"
      },
      "suspicious": {
        "noConsoleLog": "off"
      }
    }
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "double",
      "trailingCommas": "es5"
    }
  }
}
```

## 4. VS Code 統合

`.vscode/settings.json`ファイルに以下の設定を追加して、保存時に自動フォーマットとインポート整理を有効にする:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports.biome": true,
    "source.fixAll.biome": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  }
}
```

明示的に実行したい場合は、`true`の代わりに`"explicit"`を使用します:

```json
"editor.codeActionsOnSave": {
  "source.organizeImports.biome": "explicit",
  "source.fixAll.biome": "explicit"
}
```

## 5. VS Code 拡張機能のインストール

VS Code 拡張機能マーケットプレイスから「Biome」をインストールします。

## 6. 手動で実行する方法

特定のファイルに対して:

```bash
npx @biomejs/biome check --write src/file.ts
```

プロジェクト全体に対して:

```bash
npx @biomejs/biome check --write "src/**/*.{ts,js}"
```

## 7. 注意点

- VS Code 再起動後に設定が反映されます
- Prettier など他のフォーマッターと競合する場合があります

## 8. Prettier との競合を避け、Biome を優先的に使う方法

Prettier がインストールされている環境で Biome を優先的に使用するには、以下の設定を`.vscode/settings.json`に追加します：

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.organizeImports.biome": true,
    "source.fixAll.biome": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[javascript]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[json]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "biomejs.biome"
  },
  // Prettierを無効化
  "prettier.enable": false,
  // 特定のファイルに対してはPrettierを無効化
  "prettier.disableLanguages": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "json"
  ]
}
```
