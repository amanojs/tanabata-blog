import * as React from 'react'
import { Slide, Fade, IconButton } from '@material-ui/core'
import GENRES from '../models/GENRES'
import { Close, Home, Category } from '@material-ui/icons'
import histroy from '../modules/history'

interface Props {
  setMenuFlag(v: boolean): void
}

export const Menu: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Fade in={true}>
        <div className="menu">
          <h2>Menu</h2>
          <div className="menulist" style={{ overflowY: 'scroll' }}>
            <ul className="list">
              <li
                className="menulists"
                onClick={() => {
                  histroy.push('/')
                  props.setMenuFlag(false)
                }}
              >
                <Home />
                <span>HOME</span>
              </li>
              {...GENRES.map((genre, index) => (
                <Slide
                  direction="right"
                  in={true}
                  timeout={(index + 1) * 100}
                  key={index}
                >
                  <li
                    className="menulists"
                    onClick={() => {
                      histroy.push(`/?genre=${genre}`)
                      props.setMenuFlag(false)
                    }}
                  >
                    <Category />
                    <span>{genre}</span>
                  </li>
                </Slide>
              ))}
            </ul>
          </div>
          <IconButton
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              marginRight: '30px'
            }}
            color="secondary"
            onClick={() => props.setMenuFlag(false)}
          >
            <Close fontSize="large" />
          </IconButton>
        </div>
      </Fade>

      <div className="carvon" onClick={() => props.setMenuFlag(false)}></div>
      <style jsx>{`
        .carvon {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          width: 100%;
          height: 100vh;
          z-index: 10;
          background-color: rgba(0, 0, 0, 0.5);
          transition: 0.5s;
        }
        .menu {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%) translateZ(0);
          -webkit- transform: translateY(-50%) translateX(-50%) translateZ(0);
          margin: auto;
          width: 500px;
          height: 600px;
          background-color: #fff;
          border-radius: 2px;
          box-sizing: border-box;
          padding: 20px 30px;
          z-index: 20;
        }
        .menulist{    
          height: 400px;
          transform: translateZ(0);
          padding: 20px 0;
        }
        .menulist::-webkit-scrollbar{
          display: none;
        }
        .menulists{
            display: flex; 
            align-items: center;
            list-style: none;
            color: #333;
            padding: 20px 5px;
            border-bottom: 2px solid #eee;
            background-color: #fff;
            cursor: pointer;
        }
        .menulists span{
          margin-left: 10px;
        }
        @media screen and (max-width: 500px) {
          .menu {
            width: 100%;
            height: 85vh;
            border-radius: 0;
            padding: 20px 30px;
          }
          .menulist{    
            height: 70vh;
            transform: translateZ(0);
            padding: 20px 0;
          }
        }
      `}</style>
    </React.Fragment>
  )
}
