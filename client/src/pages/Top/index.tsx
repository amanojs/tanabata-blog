import * as React from 'react'
import { DeskTop, Mobile } from '../../modules/mediaqueries'
import axios from 'axios'
import TopDesk from './TopDesk'
import TopMob from './TopMob'
import { Blog } from '../../models/Blog'
import genres from '../../models/GENRES'

const Top: React.FC = () => {
  const [blogs, setBlogs] = React.useState<Blog[]>([])
  const [isLoading, setLoading] = React.useState<boolean>(false)
  const [genre, setGenre] = React.useState<string>('')
  const params = new URLSearchParams(window.location.search)
  if (params.get('genre') !== genre) {
    setGenre(params.get('genre'))
  }
  React.useEffect(() => {
    setLoading(true)
    if (genre) {
      axios
        .get('/api/getBlogs/', { params: { genre: params.get('genre') } })
        .then((value) => {
          setBlogs(value.data)
          setLoading(false)
        })
    } else {
      axios.get('/api/getBlogs/').then((value) => {
        setBlogs(value.data)
        setLoading(false)
      })
    }
  }, [genre])
  return (
    <React.Fragment>
      <DeskTop>
        <TopDesk isLoading={isLoading} blogs={blogs} genres={genres} />
      </DeskTop>
      <Mobile>
        <TopMob isLoading={isLoading} blogs={blogs} />
      </Mobile>
    </React.Fragment>
  )
}

export default Top
