import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Upload } from './pages/Upload'

const Index = () => {
  return (
    <div>
      <App />
      <Upload />
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
