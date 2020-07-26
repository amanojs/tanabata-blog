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
          <Box className="categorybox" width="50%">
            カテゴリ:
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
            <p>表示形式:</p>
            <IconButton
              edge="start"
              color={props.dispType === 0 ? 'primary' : 'inherit'}
              aria-label="menu"
              style={{ display: 'block', marginLeft: 0 }}
              onClick={() => {
                props.setDispType(0)
              }}
            >
              <CallToAction fontSize="small" />
            </IconButton>
            <IconButton
              edge="start"
              color={props.dispType === 1 ? 'primary' : 'inherit'}
              aria-label="menu"
              style={{ display: 'block', marginLeft: 0 }}
              onClick={() => {
                props.setDispType(1)
              }}
            >
              <ViewList />
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
