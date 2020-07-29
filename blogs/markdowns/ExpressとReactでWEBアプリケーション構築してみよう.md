---
title: ExpressとReactでWEBアプリケーション構築してみよう
tags: React
img: https://s3-ap-northeast-1.amazonaws.com/i.schoo/images/class/600x260/3628.jpg
created_at: '2020-07-29 12:53:00'
---

## 最終的なディレクトリ構成

```
./app
|----client/
     |----config
          |----webpack.config.js
          |----webpack.config.dev.js
     |----dist(distribution)/
     |----src/
          |----index.html
          |----index.jsx
|----server/
     |----server.js
|----package.json
|----tsconfig,json
```

## フロント側を作っていく(client)

何はともあれ **npm init**

```shell
npm init -y
```

その後必要なパッケージをインストールしていく

#### ▶ フロント側では webpack を使っていくのでそれ関係

```shell
npm i -D webpack webpack-cli html-webpack-plugin webpack-dev-server
```

|    パッケージ名     | 説明                                                                                 |
| :-----------------: | :----------------------------------------------------------------------------------- |
|       webpack       | js,css,画像ファイルなどをトランスパイルして 1 つの js ファイルにバンドルできるツール |
|     webpack-cli     | webpack を実行するための cli                                                         |
| html-webpack-plugin | バンドルされた js ファイルを埋め込んだ html を出力できる                             |
| webpack-dev-server  | webpack で開発する時に使用できる web サーバー(HMR,Proxy が使える)                    |

#### ▶ トランスパイル時に使用する babel 周り

```shell
npm i -D babel-core babel-loader@7 babel-preset-env babel-preset-react
```

#### ▶ React

```shell
npm i -S react react-dom
```

### webpack の設定ファイルを書く(webpack.config.js)

```javascript
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './client/src/index.html', //後で作っていきます
  filename: './index.html'
})

module.exports = {
  entry: {
    index: './client/src/index.jsx' // 後で作っていきます
  },
  output: {
    path: path.resolve('client/dist'),
    filename: '[name].bundle.js' //[name]がentry名に置き換えられるのでこの場合index.bundle.jsになります
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' //先ほどインストールしたbabel-loader
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'] //拡張子まで書かなくてもファイルをimportすることができるようになる
  },
  plugins: [htmlWebpackPlugin]
}
```

メモ

> webpack.config.js は cli によって実行された場所をルートとしてみることに注意
> \_\_dirname はそのファイルがおかれているディレクトリまでのパスを取得できる
> path.resolve は引数で指定したファイルの絶対パスを返す

### React を書いていく

#### ▶ まずベースとなる html

```HTML
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tanabata-blog</title>
  </head>
  <body>
    <section id="app"></section>
  </body>
</html>
```

#### ▶ jsx ファイル

```javascript
import React from 'react'
import ReactDOM from 'react-dom'

const Index = () => {
  return (
    <div>
      <div>Hello,world.</div>
    </div>
  )
}
ReactDOM.render(<Index />, document.getElementById('app'))
```

### package.json を編集して実行準備

scripts に webpack コマンドを設定

babel の preset を設定

```json
----略
"scripts": {
    "client": "webpack-dev-server --config ./client/config/webpack.config.js --open --mode development",
    "build": "webpack --config ./client/config/webpack.config.js --mode development"
 },
 "babel": {
    "presets": [
      "babel-preset-env",
      "babel-preset-react"
    ]
  },
----略
```

### 実行してみる

localhost:8080 で dev サーバーが立ち上がる

```shell
npm run client
```

./client/dist/にバンドルされ js ファイルとそれを読み込む html が出力される

```shell
npm run build
```
