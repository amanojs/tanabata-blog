import * as React from 'react'
import { Box } from '@material-ui/core'

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
          <p
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
          </p>
        </Box>
      </Box>
    </React.Fragment>
  )
}
