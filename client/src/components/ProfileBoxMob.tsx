import * as React from 'react'
import { Box, Button } from '@material-ui/core'
import { Twitter, Instagram } from '@material-ui/icons'

export const ProfileBoxMob: React.FC = () => {
  return (
    <React.Fragment>
      <Box width="100%" marginBottom="10px">
        <Box
          display="flex"
          height="120px"
          bgcolor="#fff"
          borderRadius="2px"
          padding="10px 20px"
          boxSizing="border-box"
        >
          <Box
            width="20%"
            maxHeight="100px"
            margin="0 auto"
            display="flex"
            alignItems="center"
            overflow="hidden"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1166087407126450176/hRHLHzaf_400x400.jpg"
              alt="profile"
              width="90%"
              style={{ maxHeight: '100px', objectFit: 'scale-down' }}
            />
          </Box>
          <div
            style={{
              width: '80%',
              padding: '5px 0 10px 0',
              color: '#666',
              fontSize: '50%',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Box width="100%">Amano.js</Box>
            名古屋でフロントエンド開発をしている21才です。TypeScript +
            Reactを使っての開発が得意です。まだまだヒヨッコですが精一杯記事を残していきます。
          </div>
        </Box>
        <Box marginTop="10px">
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
    </React.Fragment>
  )
}
