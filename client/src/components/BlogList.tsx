import * as React from 'react'
import { Paper, makeStyles, Box, Zoom } from '@material-ui/core'
import { Blog } from '../models/Blog'

interface OwnProps {
  blogs: Blog[]
  width: string
  margin: string
}

const useStyles = makeStyles((theme) => ({
  blog: {
    height: 550,
    margin: ' 10px 0',
    backgroundColor: '#fff',
    borderRadius: '3px'
  }
}))

export const BlogList: React.FC<OwnProps> = (props) => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Box width={props.width} margin={props.margin}>
        {props.blogs.map((item: Blog, index: number) => (
          <Zoom
            key={index}
            in={props.blogs.length ? true : false}
            style={{ transitionDelay: index * 100 + 'ms' }}
          >
            <Box className={classes.blog}>{item.title}</Box>
          </Zoom>
        ))}
      </Box>
    </React.Fragment>
  )
}
