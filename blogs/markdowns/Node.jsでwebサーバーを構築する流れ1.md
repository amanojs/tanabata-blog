---
title: Node.jsでwebサーバーを構築する流れ#1【本当の基礎】
img: https://i.imgur.com/9MM74X2.jpg
tags: Node.js
created_at: '2020-08-07 11:16:00'
---

# Node.jsでwebサーバーを構築する流れ#1【本当の基礎】
![](https://i.imgur.com/9MM74X2.jpg)

## 前置き
今回はNode.jsのexpressを使ってwebサーバーを立てていきたいと思います。

(Node.jsは導入済みとして話を進めていきます)

また、この記事は「動けばいいやー」ではなく実際に現場環境でも使われるようなデバッグツールやミドルウェアを導入して**本当の基礎**を書いていきたいと思います。

## expressの概要
expressはwebアプリケーションを構築するためのNode.jsパッケージです。

webアプリケーションを構築するパッケージは他にもいろいろありますが、その中でもexpressはとても「柔軟」で「必要最小限」なので僕は大好きです。

必要最低限といったとおりexpressのコードを書く機会はそこまで多くなく素のJavaScriptを書くことが多いのでロジック理解なども深まります。

## 必要モジュールのインストール

npmをつかって必要なモジュールをインストールしていきます。

個人的なおすすめも入っています。

すべてグローバルではなくローカルにインストールしてください。

* express
  * 上の概要で記述した通り。
* nodemon
  * 
* chalk
  * logに吐き出す文字列に色を付けることができる。
* morgan
  * HTTPアクセスやブラウザのコンソールで手に入るログなどをサーバー側でも出力できるlogger。
* debug
  * console.logに代わって使えるメソッドを提供。本番環境ではログを出力しない。
* ESlint
  * JavaScriptの静的検証ツール。コードを実行する前に分かる範囲でバグを見つけたり括弧やスペースの使い方などを、設定したスタイル(ルール)に統一できたりする。
* eslint-config-airbnb-base
  * ESlintのスタイル設定(ルール)のテンプレートみたいな。好みで使う。
* eslint-plugin-import
  * ESlintを適切に動かすために必要なモジュール(import/exportなどのルールが提供されている)

## ESlintセットアップ

```shell
./node_modules/.bin/eslint --init
```
その後いくつかの質問をされるのでプロジェクトにあった回答をしていく。

設定ファイルの生成は js , json , yml が選択できるが個人的にはjsonがおすすめ。

それぞれのIDEでESlintの拡張機能を入れておくとなお良し。

> (jsにすると書いてる途中にリンターが適応されていって気持ち悪いのと、jsonが主流なのでドキュメントが多い)


## 3000番ポートで待機

```javascript
// app.js
const express = require("express")

const app = express()
const PORT = 3000

app.get("/",(req,res)=>{
  // ルートアクセスされたときの処理
})

app.listen(PORT,()=>{
  console.log(
    `express app listen on ${PORT} port.\n`
    + `open http://localhost:${PORT} for web browser.`
  )
})

```

## おつかれさまです
キリがいいので1章はここまで！2章はこちら↓
http://tanabatablog.net/blog?title=Node.jsでwebサーバーを構築する流れ2