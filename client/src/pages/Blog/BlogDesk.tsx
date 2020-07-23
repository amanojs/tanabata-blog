import * as React from 'react'
import { Box, Paper, IconButton } from '@material-ui/core'
import histroy from '../../modules/history'
import MenuIcon from '@material-ui/icons/ArrowLeftOutlined'

const BlogDesk: React.FC = (props) => {
  return (
    <Box
      display="flex"
      width="100%"
      maxWidth="1500px"
      margin="0 auto"
      padding="0 20px"
      boxSizing="border-box"
    >
      <Box
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
      <Paper
        style={{
          width: '100%',
          minHeight: '90vh',
          padding: '50px 50px',
          boxSizing: 'border-box'
        }}
      >
        2020年7月27日
      </Paper>
      <Box width="100px" padding="0 0 0 20px">
        <ul style={{ listStyle: 'none', overflow: 'hidden' }}>
          <li>adfassssssssssssssssasdfasfasfafsfds</li>
          <li>asfasf</li>
        </ul>
      </Box>
    </Box>
  )
}

export default BlogDesk
