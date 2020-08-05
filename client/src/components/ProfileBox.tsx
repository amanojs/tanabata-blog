import * as React from 'react'
import { Box, Button } from '@material-ui/core'
import { Twitter, Instagram } from '@material-ui/icons'

interface OwnProps {
  width: string
  height: string
  marginBottom: string
  bgcolor: string
  position: string
  top: string
}

export const ProfileBox: React.FC<OwnProps> = (props) => {
  const stucks = {
    display: 'inline-block',
    padding: '5px 10px',
    backgroundColor: '#455AAB',
    margin: '0 5px 3px 0',
    fontSize: '13px',
    color: '#fff'
  }
  return (
    <React.Fragment>
      <Box
        width={props.width}
        height="550px"
        position={props.position}
        top={props.top}
        marginBottom={props.marginBottom}
      >
        <Box
          height="550px"
          marginBottom={props.marginBottom}
          bgcolor={props.bgcolor}
          padding="40px 20px"
          boxSizing="border-box"
        >
          <Box width="240px" margin="0 auto">
            <Box width="150px" margin="0 auto">
              <img
                src="https://pbs.twimg.com/profile_images/1166087407126450176/hRHLHzaf_400x400.jpg"
                alt="profile"
                width="100%"
              />
            </Box>
            <Box
              display="inline-block"
              padding="5px 30px"
              borderBottom="5px solid rgb(93,135,183)"
              margin="10px 0"
              width="auto"
            >
              Amano.js
            </Box>
            <p
              style={{
                width: '240px',
                padding: '10px 0',
                color: '#666',
                fontSize: '14px'
              }}
            >
              名古屋でフロントエンド開発をしている21才です。TypeScript +
              Reactを使っての開発が得意です。まだまだヒヨッコですが精一杯記事を残していきます。
            </p>
            <Box marginBottom="10px">
              <span style={stucks}>JavaScript</span>
              <span style={stucks}>TypeScript</span>
              <span style={stucks}>React</span>
              <span style={stucks}>Vue.js</span>
              <span style={stucks}>Node.js</span>
            </Box>
            <Button
              onClick={() => window.open('https://twitter.com/_amanojs')}
              style={{
                width: '100%',
                height: '30px',
                backgroundColor: '#2399E1',
                marginBottom: '5px',
                color: '#fff'
              }}
            >
              <Twitter />
              フォローする
            </Button>
            <Button
              onClick={() =>
                window.open('https://www.instagram.com/takashi_newlife/?hl=ja')
              }
              style={{
                width: '100%',
                height: '30px',
                backgroundColor: '#193358',
                color: '#fff'
              }}
            >
              <Instagram />
              フォローする
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  )
}
