---
title: JavaScriptでURLクエリパラメータの値を簡単に取得する方法copy
tags: JavaScript
created_at: '2020-07-23 16:08:00'
---

# JavaScript で URL クエリパラメータの値を簡単に取得する方法

## 前置き

React で SPA をつくっているとき URL クエリパラメータの値を取得したいと思いました。(検索機能実装とか)

今回自分がやってみた JavaScript でクエリパラメータの値を簡単に取得する方法を残します。

> //example.com?id=amanojs

> この ? 以下の文字列がクエリ文字列です

## 実際のコード

```tsx
const params = new URLSearchParams(window.location.search)
const value = params.get('key名') // key名の値
```

こんな簡単にクエリパラメータの値を取得することができます。

## なぜ

`URLSearchParams`クラスは URL のクエリー文字列の操作に役立つメソッドを提供してくれます。

コンストラクタに操作したいクエリー文字列を渡すことで、そのクエリー文字列を操作するためのオブジェクトを返してもらえます。

`window.location`オブジェクトの`search`プロパティは現在ページ URL のクエリ部(?以下の文字列)を参照できるので、今回はこれを URLSearchParams クラスに渡して操作するという流れでした。

## 最後に

component がマウントされてから実行することを推奨します。

しかしながら React で開発するときは`window`オブジェクトを参照するのはあまり良くないのかなぁとか思います。(テストツールの関係上)

もっといいやり方があったらぜひ教えてくださると嬉しいです。

以上
