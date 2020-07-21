import * as React from 'react'
import MediaQuery from 'react-responsive'
import { Box } from '@material-ui/core'
import TopDesk from './TopDesk'
import TopMob from './TopMob'
import axios from 'axios'
import { Blog } from '../../models/Blog'

const Top: React.FC = () => {
  const genres: string[] = ['JavaScript', 'Flutter', 'PHP']
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
      <Box bgcolor="#eee" width="100%" minHeight="100vh" paddingTop="20px">
        <MediaQuery query="(min-width: 750px)">
          <TopDesk blogs={blogs} genres={genres} />
        </MediaQuery>
        <MediaQuery query="(max-width: 749px)">
          <TopMob blogs={blogs} />
        </MediaQuery>
      </Box>
    </React.Fragment>
  )
}

export default Top
