import * as React from 'react'
import { DeskTop, Mobile } from '../../modules/mediaqueries'
import axios from 'axios'
import TopDesk from './TopDesk'
import TopMob from './TopMob'
import { Blog } from '../../models/Blog'
import genres from '../../models/GENRES'

const Top: React.FC = () => {
  const genres: string[] = ['JavaScript', 'React', 'Other']
  const [blogs, setBlogs] = React.useState<Blog[]>([])
  const [isLoading, setLoading] = React.useState<boolean>(false)
  const [genre, setGenre] = React.useState<string>('')
  const [dispType, setDispType] = React.useState<number>(0)
  const params = new URLSearchParams(window.location.search)
  if (params.get('genre') !== genre) {
    setGenre(params.get('genre'))
  }
  React.useEffect(() => {
    getAllBlog()
  }, [genre])

  const getAllBlog = async () => {
    setLoading(true)
    let result
    if (!genre) {
      result = await axios.get('/api/getBlogs/')
    } else {
      result = await axios.get('/api/getBlogs/', {
        params: { genre: params.get('genre') }
      })
    }
    setBlogs(result.data)
    setLoading(false)
  }
  return (
    <React.Fragment>
      <DeskTop>
        <TopDesk
          isLoading={isLoading}
          blogs={blogs}
          genres={genres}
          dispType={dispType}
          setDispType={setDispType}
        />
      </DeskTop>
      <Mobile>
        <TopMob
          isLoading={isLoading}
          blogs={blogs}
          dispType={dispType}
          setDispType={setDispType}
        />
      </Mobile>
    </React.Fragment>
  )
}

export default Top
