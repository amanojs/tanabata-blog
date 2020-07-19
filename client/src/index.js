import React from 'react'
import ReactDOM from 'react-dom'
import { Test } from './test'
import { Typescript } from './typescript'
import { Upload } from './pages/Upload'

const Index = () => {
  fetch('/api/').then((response) => {
    response.json().then((value) => {
      console.log(value.test)
    })
  })
  return (
    <div>
      Hello React!
      <Test />
      <Typescript />
      <Upload />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
