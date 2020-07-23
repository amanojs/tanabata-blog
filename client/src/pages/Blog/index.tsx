import * as React from 'react'
import axios from 'axios'
import { BlogDetail } from '../../models/BlogDetail'
import { Box } from '@material-ui/core'
import { DeskTop, Mobile } from '../../modules/mediaqueries'
import BlogDesk from './BlogDesk'
import BlogMob from './BlogMob'

const BlogPage: React.FC = () => {
  const [blogDetail, setBlog] = React.useState<BlogDetail>()
  const params = new URLSearchParams(window.location.search)
  const title = params.get('title').toString()

  React.useEffect(() => {
    axios.get('/api/getBlog/', { params: { title: title } }).then((value) => {
      console.log(value)
      setBlog(value.data)
    })
  }, [])

  return (
    <React.Fragment>
      <DeskTop>
        <BlogDesk blogDetail={blogDetail} />
      </DeskTop>
      <Mobile>
        <BlogMob blogDetail={blogDetail} />
      </Mobile>
    </React.Fragment>
  )
}

export default BlogPage
