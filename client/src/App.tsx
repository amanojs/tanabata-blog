import * as React from 'react'
import { AppBar, Toolbar, IconButton, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Router, Switch, Route } from 'react-router-dom'
import history from './modules/history'
//import Top from './pages/Top/'
const Top = React.lazy(() => import('./pages/Top/'))
//import BlogPage from './pages/Blog/'
const BlogPage = React.lazy(() => import('./pages/Blog/'))
import { Menu } from './components/Menu'

const App: React.FC = () => {
  const [menuFlag, setMenuFlag] = React.useState<boolean>(false)
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading</div>}>
        <Router history={history}>
          <AppBar position="static" style={{ backgroundColor: '#444' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setMenuFlag(true)}
              >
                <MenuIcon />
              </IconButton>
              <h6
                onClick={() => history.push('/')}
                style={{ cursor: 'pointer' }}
              >
                タナバタ.Blog
              </h6>
            </Toolbar>
          </AppBar>

          {menuFlag && <Menu setMenuFlag={setMenuFlag} />}

          <Box bgcolor="#eee" width="100%" minHeight="100vh" padding="20px 0">
            <Switch>
              <Route exact path="/" component={Top} />
              <Route exact path="/genre" component={Top} />
              <Route exact path="/blog" component={BlogPage} />
            </Switch>
          </Box>

          <footer style={{ width: '100%' }}>
            {/* <div style={{ height: '400px' }}></div> */}
            <div
              style={{
                height: '60px',
                backgroundColor: '#444',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff'
              }}
            >
              <small>&copy;{new Date().getFullYear()} Nagoya Amano.js</small>
            </div>
          </footer>
        </Router>
      </React.Suspense>
    </React.Fragment>
  )
}

export default App
