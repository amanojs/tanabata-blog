import * as React from 'react'
import { Blog } from '../../models/Blog'
import { Box } from '@material-ui/core'
import { BlogListMob } from '../../components/BlogListMob'

interface OwnProps {
  blogs: Blog[]
}

const TopMob: React.FC<OwnProps> = (props) => {
  return (
    <React.Fragment>
      <Box
        width="100%"
        maxWidth="1500px"
        boxSizing="border-box"
        padding="0 20px"
        margin="0 auto"
      >
        <Box>New</Box>
        <Box>
          <BlogListMob
            blogs={props.blogs}
            width="100%"
            margin="-10px 10px 0 0"
          />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default TopMob
