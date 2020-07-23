import * as React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Router, Switch, Route, Link } from 'react-router-dom'
import history from './modules/history'
import Top from './pages/Top/'

const App: React.FC = () => {
  //queryparamを取得
  const param = new URLSearchParams(window.location.search)
  console.log(param.get('genre'))
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

        <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/genre" component={Top} />
        </Switch>

        <footer style={{ width: '100%' }}>
          <div style={{ height: '400px' }}></div>
          <div style={{ height: '60px', backgroundColor: '#444' }}></div>
        </footer>
      </Router>
    </React.Fragment>
  )
}

export default App
