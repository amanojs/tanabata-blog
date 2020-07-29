import * as React from 'react'
import { Blog } from '../../models/Blog'
import { Box, LinearProgress, IconButton } from '@material-ui/core'
import { CallToAction, ViewList } from '@material-ui/icons'
import { BlogListMob } from '../../components/BlogListMob'
import { ProfileBoxMob } from '../../components/ProfileBoxMob'

interface OwnProps {
  isLoading: boolean
  blogs: Blog[]
  dispType: number
  setDispType(i: number): void
}

const TopMob: React.FC<OwnProps> = (props) => {
  return (
    <React.Fragment>
      <Box
        width="100%"
        maxWidth="1500px"
        boxSizing="border-box"
        padding="0 10px"
        margin="0 auto"
      >
        <ProfileBoxMob />
        <Box display="flex" style={{ paddingTop: '30px' }}>
          <Box
            className="categorybox"
            width="50%"
            display="flex"
            alignItems="center"
            boxSizing="border-box"
            border="1px solid #3F51B5"
            padding="10px 0 10px 10px"
            margin="0px 0 15px 0"
            fontSize="17px"
            fontWeight="bold"
            style={{ borderWidth: '0 0 1px 15px' }}
          >
            {new URLSearchParams(window.location.search).get('genre') ||
              '最新の記事'}
          </Box>
          <Box
            className="disptype-contoroller"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width="50%"
          >
            <IconButton
              edge="start"
              aria-label="menu"
              style={{ display: 'block', marginLeft: 0 }}
              onClick={() => {
                props.setDispType(0)
              }}
            >
              <CallToAction
                fontSize="small"
                style={{
                  color: props.dispType === 0 ? '#61C1BE' : '#999'
                }}
              />
            </IconButton>
            <IconButton
              edge="start"
              aria-label="menu"
              style={{ display: 'block', marginLeft: 0 }}
              onClick={() => {
                props.setDispType(1)
              }}
            >
              <ViewList
                style={{
                  color: props.dispType === 1 ? '#61C1BE' : '#999'
                }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box>
          {props.isLoading ? (
            <LinearProgress />
          ) : (
            <BlogListMob
              blogs={props.blogs}
              width="100%"
              margin="-10px 10px 0 0"
              dispType={props.dispType}
            />
          )}
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default TopMob
