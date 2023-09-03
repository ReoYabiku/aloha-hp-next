# 学生団体ALOHA　HP

## 開発の始め方
1. リポジトリをクローンする
```shell
$ git clone git@github.com:ReoYabiku/aloha-hp-next.git
```

2. ローカル環境の整備
```shell
$ npm install
```

3. ローカルホストの立ち上げ
```shell
$ npm run dev
```

## プルリクエストの作成
1. 作業内容をプッシュする
```shell
$ git push origin sample_branch
```

2. PRの作成
以下の項目を記載してください
- 変更内容の概略
- 気になる箇所についての補足説明

PRの例
![良いPR](https://alohahp.s3.ap-northeast-1.amazonaws.com/readme/good_pull_request.png)

3. 管理者へのメンション

[@ReoYabiku](https://github.com/ReoYabiku/)までレビューの依頼を出してください

<image src="https://alohahp.s3.ap-northeast-1.amazonaws.com/readme/how_to_request_review.png" width="200">

## 「資料一覧」へのファイルの追加
`/app/documents/page.tsx`ファイルを編集することで、ファイルを追加することができます。

### 事前準備
1. google document形式ではなく、PDF形式で該当ファイルを保存する
1. 【公開範囲設定】該当ファイルの公開範囲を「リンクを知っている全員」とする
1. 【ファイルIDの取得】PDFファイルを閲覧したとき、URLからファイルIDを取得する
```
https://drive.google.com/file/d/<--- これがファイルID --->/view
```

### 各フィールドの説明
| キー名 | 説明 | 値 |
| --- | --- | --- |
| title | ファイル名 | ファイル名を記載してください |
| embedURL | 埋め込みのためのURL | 屋比久がAWS（クラウドサービス）上で管理しています<br>連絡をお願いします |
| description | ファイルの説明 | ファイルの内容、ページ数など |
| showURL | ファイル閲覧のためのURL | `https://drive.google.com/file/d/ファイルID/view` |
| downloadURL | ダウンロードのためのURL | `https://drive.google.com/u/4/uc?id=ファイルID&export=download` |