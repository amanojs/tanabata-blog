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
      <Upload />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
