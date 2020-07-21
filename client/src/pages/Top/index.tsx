import * as React from 'react'
import MediaQuery from 'react-responsive'
import { Box } from '@material-ui/core'
import TopDesk from './TopDesk'

const Top: React.FC = () => {
  const genres: string[] = ['JavaScript', 'Flutter', 'PHP']
  return (
    <React.Fragment>
      <Box bgcolor="#eee" width="100%" minHeight="100vh" paddingTop="20px">
        <MediaQuery query="(min-width: 750px)">
          <TopDesk genres={genres} />
        </MediaQuery>
      </Box>
    </React.Fragment>
  )
}

export default Top
