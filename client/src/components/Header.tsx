import * as React from 'react'
import history from '../modules/history'
import MenuIcon from '@material-ui/icons/Menu'
import { Menu } from '../components/Menu'
import { DeskTop, Mobile } from '../modules/mediaqueries'
import { IconButton } from '@material-ui/core'
const Header: React.FC = () => {
  const [menuFlag, setMenuFlag] = React.useState<boolean>(false)
  return (
    <React.Fragment>
      <div
        style={{ width: '100%', height: '80px', backgroundColor: '#193358' }}
      >
        <div className="menubtn">
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setMenuFlag(true)}
          >
            <MenuIcon style={{ color: '#fff' }} fontSize="default" />
          </IconButton>
        </div>
        <div className="logobar">
          <div
            onClick={() => history.push('/')}
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <img src="/static/logo.gif" alt="logo" width="50px" />
            <h1>tanabata.blog</h1>
          </div>
        </div>
      </div>
      {menuFlag && <Menu setMenuFlag={setMenuFlag} />}
      <style jsx>{`
        .logobar {
          position: relative;
          color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 80px;
          box-sizing: border-box;
          padding: 0 20px;
          margin: 0 auto;
        }
        .menubtn {
          position: absolute;
          left: 20px;
          top: 15px;
          z-index: 10;
        }
        .logobar h1 {
          font-size: 30px;
          font-family: 'Quicksand', sans-serif;
        }
        .toolbar {
          margin: 0 auto;
          color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 60px;
          box-sizing: border-box;
          padding: 0 20px;
        }
        .toolbar ul {
          display: flex;
        }
        .toolbar li {
          cursor: pointer;
          font-size: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 50px;
          height: 60px;
          list-style: none;
          transition: 0.2s;
        }
        .toolbar li:hover {
          background-color: #004986;
        }
        @media screen and (min-width: 1501px) {
          .logobar,
          .toolbar {
            max-width: 1500px;
          }
        }
        @media screen and (max-width: 1500px) {
          .logobar,
          .toolbar {
            max-width: 1200px;
          }
        }
        @media screen and (max-width: 959px) {
          .logobar {
            justify-content: center;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

export default Header
