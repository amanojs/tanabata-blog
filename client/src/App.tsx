import * as React from 'react'
import { Box } from '@material-ui/core'
import { Router, Switch, Route } from 'react-router-dom'
import history from './modules/history'
//import Top from './pages/Top/'
const Top = React.lazy(() => import('./pages/Top/'))
//import BlogPage from './pages/Blog/'
const BlogPage = React.lazy(() => import('./pages/Blog/'))
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>loading</div>}>
        <Router history={history}>
          <Header />

          <Box
            bgcolor="#f9f9f9"
            width="100%"
            minHeight="100vh"
            padding="20px 0"
          >
            <Switch>
              <Route exact path="/" component={Top} />
              <Route exact path="/genre" component={Top} />
              <Route exact path="/blog" component={BlogPage} />
            </Switch>
          </Box>

          <footer style={{ width: '100%' }}>
            <div style={{ height: '200px', backgroundColor: '#193358' }}></div>
            <div
              style={{
                height: '60px',
                backgroundColor: '#20232B',
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
