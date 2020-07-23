import * as React from 'react'
import { Box } from '@material-ui/core'
import { DeskTop, Mobile } from '../../modules/mediaqueries'
import BlogDesk from './BlogDesk'

const BlogPage: React.FC = () => {
  const params = new URLSearchParams(window.location.search)
  const title = params.get('title').toString()

  React.useEffect(() => {})

  return (
    <React.Fragment>
      <DeskTop>
        <BlogDesk />
      </DeskTop>
      <Mobile>
        <Box>{title}の blogpage mobile</Box>
      </Mobile>
    </React.Fragment>
  )
}

export default BlogPage
