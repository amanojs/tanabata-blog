---
title: Node.jsでwebサーバーを構築する流れ#2【本当の基礎】
img: https://i.imgur.com/9MM74X2.jpg
tags: Node.js
created_at: '2020-08-08 00:56:00'
---

# Node.jsでwebサーバーを構築する流れ#2【本当の基礎】
![](https://i.imgur.com/9MM74X2.jpg)

## 前回(1章)
http://tanabatablog.net/blog?title=Node.js%E3%81%A7web%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%92%E6%A7%8B%E7%AF%89%E3%81%99%E3%82%8B%E6%B5%81%E3%82%8C1

## chalkを使う
app.jsに少し追加と変更を加える

```javascript
// app.js
const chalk = require("chalk")

// ・・・

app.listen(PORT,()=>{
  console.log(
    `express app listen on ${chalk.yellow(PORT)} port.\n`
    + `open ${chalk.yellow(`http://localhost:${PORT}`)} for web browser.`
  )
})

```

こうすると出力されるログに色を付けることができる。この場合は目立たせたい部分を黄色にしている。


## debugを使う
app.jsの console.log を debug に置き換える

```javascript
// app.js
const debug = require("debug")("app")

// ・・・

app.listen(PORT,()=>{
  debug(
    `express app listen on ${chalk.yellow(PORT)} port.\n`
    + `open ${chalk.yellow(`http://localhost:${PORT}`)} for web browser.`
  )
})
```

ログを出力するというのはconsole.logと一緒ですが、本番環境で動かす際debugの方はログを出力しません。

これからはapp.jsをデバック環境で実行したいときは下記のように明示的に設定してあげましょう。
```shell
DEBUG=app node app.js
```

## morganをmiddlewareに設定する

```javascript
// app.js
const morgan = require("morgan")
app.use(morgan("short"))
```

HTTPアクセス情報や普段ブラウザで見るようなリソース情報もログ出力することができます。

morganの引数に渡す文字列によって出力する情報の詳細度が変わってきます。今回は簡単な情報だけを出力する short を選択しました。


## nodemonの設定
nodemonが提供してくれる主な機能の2つを使って開発環境を充実させていきます。

nodemonはjsonファイルで設定を付け足すことができるのでまずはそれを書いていきたいと思うのですが、なんと便利なことにpackage.jsonで簡単に書くこともできるので今回はその形式でやります。

```json
// package.json

  // ・・・
  "nodemonConfig": {
    "restartable": "rs",
    "ignore": [
      "node_modules/**/node_modules"
    ],
    "delay": "2500",
    "env": {
      "NODE_ENV": "development",
      "PORT": 4000
    }
  }
```

```restartable```はサーバー起動中にコンソールに打ち込むことで即時再起動させることができる文字列を設定できるオプションです。

```ignore```は監視対象外にしたいファイルやフォルダを指定できます。

```delay```は変更があってから再起動をおこなうまでに遅延を作ることができます。頻繁に保存をしてしまう癖があるので、そのたびに再起動がかかると負荷もかかるということもありこの設定をいつも追加しています。

```env```はその名の通りnodemonが提供する環境変数です。めっちゃ便利。

次にサーバー起動時にnodemonを使うように設定しましょう。package.jsonのscriptsを下記のように変更します。

```json
// package.json
  
  // ・・・
  "scripts": {
    "server": "DEBUG=app nodemon app.js"
  },
```

そしてapp.jsのPORTを先ほど設定したnodemonのenvからもらってくるように変更します
```javascript
// app.js
const PORT = process.env.PORT || 3000
```

## お疲れさまでした
次の章ではexpressで性的ファイルのホスティングの設定をします
次の章↓