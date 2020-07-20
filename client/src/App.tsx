import * as React from 'react'
import { AppBar } from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Top from './pages/Top'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">タナバタ.Blog</Typography>
        </Toolbar>
      </AppBar>
      <Top />
    </React.Fragment>
  )
}

export default App
