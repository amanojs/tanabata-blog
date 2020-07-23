import * as React from 'react'
import history from '../modules/history'
import { makeStyles, Box, Slide, Paper } from '@material-ui/core'
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
    borderRadius: '3px',
    cursor: 'pointer',
    overflow: 'hidden'
  }
}))

export const BlogList: React.FC<OwnProps> = (props) => {
  const classes = useStyles()
  //style={{ transitionDelay: index * 100 + 'ms' }}
  return (
    <React.Fragment>
      <Box width={props.width} margin={props.margin}>
        {props.blogs.map((item: Blog, index: number) => (
          <Slide
            direction="up"
            key={index}
            in={props.blogs.length ? true : false}
          >
            <Paper
              className={classes.blog}
              onClick={() => history.push(`/blog?title=${item.title}`)}
            >
              <h2 style={{ padding: '20px', color: '#555', fontSize: '115%' }}>
                {item.title}
              </h2>
              <img
                src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg"
                width="100%"
                height="350px"
                alt="blog img"
                style={{ objectFit: 'cover' }}
              />
              <p
                style={{
                  color: '#666',
                  padding: '2% 10% 0 10%'
                }}
              >
                {item.preview && item.preview + '...'}
              </p>
            </Paper>
          </Slide>
        ))}
      </Box>
    </React.Fragment>
  )
}
