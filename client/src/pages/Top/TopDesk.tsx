import * as React from 'react'
import { Box, Button } from '@material-ui/core'
import { BlogList } from '../../components/BlogList'
import { Blog } from '../../models/Blog'
import { ProfileBox } from '../../components/ProfileBox'
import history from '../../modules/history'

interface OwnProps {
  genres: string[]
  blogs: Blog[]
}

const TopDesk: React.FC<OwnProps> = (props) => {
  return (
    <React.Fragment>
      <Box
        width="100%"
        maxWidth="1500px"
        boxSizing="border-box"
        padding="0 20px"
        margin="15px auto"
      >
        <Box
          width="100%"
          display="flex"
          flexWrap="wrap"
          padding="20px 100px 30px 100px"
          boxSizing="border-box"
          style={{
            backgroundImage:
              'url(https://icotto.k-img.com/system/press_eye_catches/000/010/037/021327b3d8ad3846826d14abf41a81e29fa75aea.jpeg?1491556993)',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom'
          }}
          borderRadius="2px"
        >
          {props.genres.map((item: string, index: number) => (
            <Button
              key={index}
              style={{
                width: '32%',
                height: '40px',
                marginTop: '10px',
                backgroundColor: '#fff',
                marginRight: (index + 1) % 3 == 0 ? '0px' : '2%'
              }}
              onClick={() => history.push('/genre?genre=javascript')}
            >
              {item}
            </Button>
          ))}
        </Box>

        <Box style={{ paddingTop: '30px' }}>New</Box>
        <Box display="flex">
          <BlogList blogs={props.blogs} width="70%" margin="-10px 25px 0 0" />
          <ProfileBox
            width="31%"
            height="425px"
            marginBottom="10px"
            bgcolor="#fff"
            position="sticky"
            top="10px"
          />
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default TopDesk
