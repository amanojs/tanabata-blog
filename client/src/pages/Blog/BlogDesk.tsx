import * as React from 'react'
import { BlogDetail } from '../../models/BlogDetail'
import { Box, IconButton } from '@material-ui/core'
import histroy from '../../modules/history'
import MenuIcon from '@material-ui/icons/ArrowLeftOutlined'
import { BlogPaper } from '../../components/BlogPaper'

interface Props {
  blogDetail: BlogDetail
}

const BlogDesk: React.FC<Props> = (props) => {
  return (
    <Box
      display="flex"
      alignItems="start"
      width="100%"
      maxWidth="1500px"
      margin="0 auto"
      padding="0 20px"
      boxSizing="border-box"
    >
      <Box
        position="sticky"
        top="0"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        width="100px"
        height="460px"
        marginRight="10px"
        borderRadius="2px"
        padding="20px 0"
      >
        <IconButton
          edge="start"
          aria-label="menu"
          style={{ backgroundColor: '#fff' }}
          onClick={() => histroy.goBack()}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      <BlogPaper blogDetail={props.blogDetail} padding="50px 50px" />

      <Box width="100px" padding="0 0 0 20px" position="sticky" top="20px">
        <ul style={{ listStyle: 'none', overflow: 'hidden' }}>
          <li>adfassssssssssssssssasdfasfasfafsfds</li>
          <li>asfasf</li>
        </ul>
      </Box>
    </Box>
  )
}

export default BlogDesk
