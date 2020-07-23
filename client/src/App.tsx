import * as React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Router, Switch, Route, Link } from 'react-router-dom'
import history from './modules/history'
import Top from './pages/Top/'
import BlogPage from './pages/Blog/'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router history={history}>
        <AppBar position="static" style={{ backgroundColor: '#444' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">タナバタ.Blog</Typography>
          </Toolbar>
        </AppBar>

        <Box bgcolor="#eee" width="100%" minHeight="100vh" padding="20px 0">
          <Switch>
            <Route exact path="/" component={Top} />
            <Route exact path="/genre" component={Top} />
            <Route exact path="/blog" component={BlogPage} />
          </Switch>
        </Box>

        <footer style={{ width: '100%' }}>
          <div style={{ height: '400px' }}></div>
          <div style={{ height: '60px', backgroundColor: '#444' }}></div>
        </footer>
      </Router>
    </React.Fragment>
  )
}

export default App
