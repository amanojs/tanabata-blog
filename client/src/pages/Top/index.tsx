import * as React from 'react'
import { DeskTop, Mobile } from '../../modules/mediaqueries'
import axios from 'axios'
import TopDesk from './TopDesk'
import TopMob from './TopMob'
import { Blog } from '../../models/Blog'

const Top: React.FC = () => {
  const genres: string[] = ['JavaScript', 'React', 'Vue.js', 'Flutter', 'PHP']
  const [blogs, setBlogs] = React.useState<Blog[]>([])
  React.useEffect(() => {
    axios.get('/api/getBlogs/').then((value) => {
      let pushValue: Blog[] = []
      Object.keys(value.data.fileMap).forEach((key) => {
        pushValue = [...pushValue, value.data.fileMap[key]]
      })
      setBlogs(pushValue)
    })
  }, [])
  return (
    <React.Fragment>
      <DeskTop>
        <TopDesk blogs={blogs} genres={genres} />
      </DeskTop>
      <Mobile>
        <TopMob blogs={blogs} />
      </Mobile>
    </React.Fragment>
  )
}

export default Top
