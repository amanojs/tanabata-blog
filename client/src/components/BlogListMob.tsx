import * as React from 'react'
import { makeStyles, Box, Slide, Zoom } from '@material-ui/core'
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

export const BlogListMob: React.FC<OwnProps> = (props) => {
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
            <Box className={classes.blog}>
              <h2 style={{ padding: '20px', fontSize: '90%' }}>{item.title}</h2>
              <img
                src="https://i.pinimg.com/originals/cb/ae/1a/cbae1acb1b710a97141a556bb91274a0.jpg"
                width="100%"
                height="350px"
                alt="blog img"
                style={{ objectFit: 'cover' }}
              />
              <p
                style={{
                  color: '#666',
                  padding: '5% 10% 0 10%'
                }}
              >
                {item.preview && item.preview.substr(0, 50) + '...'}
              </p>
            </Box>
          </Slide>
        ))}
      </Box>
    </React.Fragment>
  )
}
