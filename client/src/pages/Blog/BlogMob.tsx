import * as React from 'react'
import { BlogDetail } from '../../models/BlogDetail'
import { Box } from '@material-ui/core'
import { BlogPaper } from '../../components/BlogPaper'

interface Props {
  blogDetail: BlogDetail
}

const BlogMob: React.FC<Props> = (props) => {
  return (
    <Box boxSizing="border-box" marginTop="-20px">
      <BlogPaper blogDetail={props.blogDetail} padding="15px"></BlogPaper>
    </Box>
  )
}

export default BlogMob
