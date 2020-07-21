import * as React from 'react'
import { Box, Button } from '@material-ui/core'
import { BlogList } from '../../components/BlogList'
import { Blog } from '../../models/Blog'
import axios from 'axios'

interface OwnProps {
  genres: string[]
}

const TopDesk: React.FC<OwnProps> = (props) => {
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
      <Box
        width="100%"
        maxWidth="1500px"
        boxSizing="border-box"
        padding="0 20px"
        margin="0 auto"
      >
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          padding="20px 100px 30px 100px"
          boxSizing="border-box"
          style={{
            backgroundImage:
              'url(https://icotto.k-img.com/system/press_eye_catches/000/010/037/021327b3d8ad3846826d14abf41a81e29fa75aea.jpeg?1491556993)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
        >
          {props.genres.map((item: string, index: number) => (
            <Button
              style={{
                width: '32%',
                height: '40px',
                marginTop: '10px',
                backgroundColor: '#fff',
                marginRight: (index + 1) % 3 == 0 ? '0px' : '2%'
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
        <Box>New</Box>
        <Box display="flex">
          <BlogList blogs={blogs} width="75%" margin="-10px 10px 0 0" />
          <Box width="24%" height="400px" bgcolor="#fff"></Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default TopDesk
