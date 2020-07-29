---
title: ReactのuseStateのセッターで配列を更新しても再レンダリングされない時copy
tags: React
img: https://i0.wp.com/www.non-standardworld.co.jp/wp-content/uploads/2018/08/firebase-data.png?fit=800%2C533&ssl=1
created_at: '2020-07-23 19:45:56'
---

# React の useState のセッターで配列を更新しても再レンダリングされない時 copy.md

## 前置き

React の state hook で配列を定義していて、更新したいと思いセッターに値を渡すと中身は更新されているのにコンポーネントが再レンダリングされない事案にぶち当たりました。

```tsx
const [hoge, setHoge] = React.useState(InitialArray)
```

これに悩まされて数時間無駄にしたので誰かのお役に立てば...

## 問題のコード

問題となるコードのサンプルを作ってみました

```jsx
const LunchList = () => {
  const [lunchlist, setList] = React.useState(InitialArray)

  React.useEffect(() => {
    const setvalue = lunchlist
    setvalue.push('パスタ') //重要
    setList(setvalue)
  })
}
```

パット見動きそうなのですがこれだと前置きで話した通り再レンダリングされません。

## なぜ？

調べてみたところ React の state hook は

```javascript
object.is()
```

を使って変更があったかどうかを判別しているので、

今回の例のように`lunchlist`をコピーした`setvalue`を
`push()` などで直接操作してセッターに渡しても再レンダリングされないようです。

> 公式の記事
> If you return the same value from a Reducer Hook as the current state, React will bail out without rendering the children or firing effects. (React uses the Object.is comparison algorithm.)

## 解決

オリジナルでもコピーでもダメなら新しい配列をつくってしまう

```javascript
const setvalue = [...lunchlist, 'パスタ'] //解決
setList(setvalue)
```

こうしてしまえば`object.is()`で変更があったか判別できるので再レンダリングしてもらえます

以上
