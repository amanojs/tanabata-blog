import * as React from 'react'
import { Slide } from '@material-ui/core'
import GENRES from '../models/GENRES'

interface Props {
  setMenuFlag(v: boolean): void
}

export const Menu: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="carvon" onClick={() => props.setMenuFlag(false)}>
        <Slide direction="down" in={true}>
          <div className="menu">
            <h2>Menu</h2>
            <div>
              <ul>{...GENRES.map((genre) => <li>{genre}</li>)}</ul>
            </div>
          </div>
        </Slide>
      </div>
      <style jsx>{`
        .carvon {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          top: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 10;
          transition: 0.5s;
        }
        .menu {
          width: 400px;
          height: 600px;
          background-color: #fff;
          z-index: 20;
        }
      `}</style>
    </React.Fragment>
  )
}
