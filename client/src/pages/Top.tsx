import * as React from 'react'
import { Box, Card } from '@material-ui/core'
import { BlogList } from '../components/BlogList'
import { Blog } from '../models/Blog'
import axios from 'axios'

const Top: React.FC = () => {
  const [blogs, setBlogs] = React.useState<Blog[]>([])
  React.useEffect(() => {
    axios.get('/api/getBlogs/').then((value) => {
      let pushValue: Blog[] = []
      Object.keys(value.data.fileMap).forEach((key) => {
        pushValue = [...pushValue, value.data.fileMap[key]]
      })
      setBlogs(pushValue)
    })
  }, [])

  return (
    <React.Fragment>
      <Box bgcolor="#F50057" width="100%" height="100vh">
        <BlogList blogs={blogs} />
      </Box>
    </React.Fragment>
  )
}

export default Top
