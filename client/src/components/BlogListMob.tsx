import * as React from 'react'
import history from '../modules/history'
import { makeStyles, Box, Slide, Paper } from '@material-ui/core'
import { Blog } from '../models/Blog'

interface OwnProps {
  blogs: Blog[]
  width: string
  margin: string
  dispType: number
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
            <Paper
              className={classes.blog}
              style={{
                display: props.dispType === 0 ? 'block' : 'flex',
                flexWrap: 'wrap',
                alignItems: 'start',
                height: props.dispType === 0 ? '550px' : 'auto',
                minHeight: '70px',
                margin: props.dispType === 0 ? '10px 0' : '2px 0'
              }}
              onClick={() => history.push(`/blog?title=${item.title}`)}
            >
              {props.dispType === 0 ? (
                <React.Fragment>
                  <h2 style={{ padding: '20px', fontSize: '90%' }}>
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
                      padding: '5% 10% 0 10%'
                    }}
                  >
                    {item.preview && item.preview.substr(0, 50) + '...'}
                  </p>
                </React.Fragment>
              ) : (
                false
              )}

              {props.dispType === 1 ? (
                <React.Fragment>
                  <img
                    src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_1280.jpg"
                    width="20%"
                    height="70px"
                    alt="blog img"
                    style={{ objectFit: 'cover' }}
                  />
                  <Box width="80%">
                    <h2
                      style={{
                        color: '#555',
                        fontSize: '75%',
                        overflow: 'hidden',
                        height: '70px',
                        padding: '10px',
                        boxSizing: 'border-box'
                      }}
                    >
                      {item.title}
                    </h2>
                  </Box>
                </React.Fragment>
              ) : (
                false
              )}
            </Paper>
          </Slide>
        ))}
      </Box>
    </React.Fragment>
  )
}
