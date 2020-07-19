import React from 'react'
import ReactDOM from 'react-dom'
import { Test } from './test'
import { Typescript } from './typescript'
import { Upload } from './pages/Upload'

const Index = () => {
  const [Blogs, setBlogs] = React.useState([])
  React.useEffect(() => {
    fetch('/api/').then((response) => {
      response.json().then((value) => {
        console.log(value)
      })
    })
    fetch('/api/getBlogs/').then((response) => {
      response.json().then((value) => {
        Object.keys(value.fileMap).forEach((key) => {
          console.log(value.fileMap[key])
          const pushValue = [...Blogs, value.fileMap[key]]
          setBlogs(pushValue)
        })
      })
    })
  }, [])

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
