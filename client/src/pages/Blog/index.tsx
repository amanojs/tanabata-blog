import * as React from 'react'
import axios from 'axios'
import { BlogDetail } from '../../models/BlogDetail'
import { Box } from '@material-ui/core'
import { DeskTop, Mobile } from '../../modules/mediaqueries'
import BlogDesk from './BlogDesk'
import BlogMob from './BlogMob'

const BlogPage: React.FC = () => {
  const [blogDetail, setBlog] = React.useState<BlogDetail>()
  const [isLoading, setLoading] = React.useState<boolean>(true)
  const params = new URLSearchParams(window.location.search)
  const title = params.get('title').toString()

  React.useEffect(() => {
    window.scroll({ left: 0, top: 0 })
    axios.get('/api/getBlog/', { params: { title: title } }).then((value) => {
      console.log(value)
      setBlog(value.data)
      setLoading(false)
    })
  }, [])

  return (
    <React.Fragment>
      <DeskTop>
        <BlogDesk blogDetail={blogDetail} isLoading={isLoading} />
      </DeskTop>
      <Mobile>
        <BlogMob blogDetail={blogDetail} />
      </Mobile>
    </React.Fragment>
  )
}

export default BlogPage
