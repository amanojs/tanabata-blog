import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Test } from './test'
import { Typescript } from './typescript'
import { Upload } from './pages/Upload'

const Index = () => {
  React.useEffect(() => {
    fetch('/api/').then((response) => {
      response.json().then((value) => {
        //console.log(value)
      })
    })
  })

  return (
    <div>
      <App />
      <button
        onClick={() => {
          console.log(Blogs)
        }}
      >
        aaa
      </button>
      <div
        dangerouslySetInnerHTML={{
          __html: `<h1>JavaScriptのエラー処理について</h1>\n<p>エラー処理で得たエラーオブジェクトを使ってログファイルを記録する</p>\n<h2>window.onerror = function()</h2>\n<p>エラーが発生すると実行されるイベントハンドラー\n引数をいっぱいもつよ</p>\n<p>第一引数 message ... エラーのメッセージ\n第二引数 source  ... エラーが発生したファイルのパス(ソース)\n第三引数 lineNo  ... エラーが発生した行数\n第四引数 columnNo ... エラーが発生した列数\n第五引数 error   ... Errorオブジェクト</p>\n<pre><code class=\"hljs\">window.onerror = function(　message,　source,　lineNo,　columnNo,　error){}</code></pre><h2>try/catch</h2>\n<pre><code class=\"hljs\">try{\n //処理\n}catch(err){\n //エラー処理\n}</code></pre><h2>エラーを発生させてみる</h2>\n<pre><code class=\"hljs\">throw new Error('error message')</code></pre><h2>バリデート処理</h2>\n<h3>Validate ...検証</h3>\n<p>ユーザが入力したフォームの値を検証し正しくなければエラー処理を行うシステム。</p>\n<blockquote>\n<p>正しい =&gt; システムが望む値</p>\n</blockquote>\n`
        }}
      ></div>
      Hello React!
      <Test />
      <Typescript />
      <Upload />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
