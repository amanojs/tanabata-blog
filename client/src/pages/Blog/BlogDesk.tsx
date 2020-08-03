import * as React from 'react'
import { BlogDetail } from '../../models/BlogDetail'
import { Box, IconButton } from '@material-ui/core'
import histroy from '../../modules/history'
import MenuIcon from '@material-ui/icons/ArrowLeftOutlined'
import { BlogPaper } from '../../components/BlogPaper'

interface Props {
  blogDetail: BlogDetail
  isLoading: boolean
}

const BlogDesk: React.FC<Props> = (props) => {
  let items = []
  if (!props.isLoading) {
    let markdown = document.getElementById('markdown')
    const collections = markdown.getElementsByTagName('h2')
    for (let i = 0; collections.length > i; i++) {
      items.push(collections[i].innerText)
    }
  }

  const scrollItem = (index: number) => {
    const rect = document
      .getElementById('markdown')
      .getElementsByTagName('h2')
      [index].getBoundingClientRect()
    console.log(rect.top)
    window.scrollBy({ left: 0, top: rect.top - 50, behavior: 'smooth' })
  }

  return (
    <Box
      display="flex"
      alignItems="start"
      width="100%"
      maxWidth="1500px"
      margin="30px auto"
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

      <Box width="200px" padding="0 0 0 20px" position="sticky" top="20px">
        <ul style={{ listStyle: 'none', overflow: 'hidden' }}>
          {items.map((item, index) => (
            <li key={item} onClick={() => scrollItem(index)} className="items">
              {item}
            </li>
          ))}
        </ul>
      </Box>
      <style jsx>{`
        .items {
          color: #666;
          cursor: pointer;
          transition: 0.2s;
          border-radius: 2px;
          padding: 5px 3px;
          margin-bottom: 5px;
        }
        .items:hover {
          background-color: #f5f5f5;
          color: #444;
        }
      `}</style>
    </Box>
  )
}

export default BlogDesk
