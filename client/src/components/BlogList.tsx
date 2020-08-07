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
              style={{
                display: props.dispType === 0 ? 'block' : 'flex',
                flexWrap: 'wrap',
                alignItems: 'start',
                height: props.dispType === 0 ? '550px' : 'auto',
                minHeight: '100px'
              }}
              onClick={() => history.push(`/blog?title=${item.base.slice(0, -5)}`)}
            >
              {/* カード表示 */}
              {props.dispType === 0 ? (
                <React.Fragment>
                  <h2
                    style={{
                      width: '80%',
                      padding: '20px',
                      color: '#555',
                      fontSize: '115%'
                    }}
                  >
                    {item.title}
                  </h2>

                  <img
                    src={item.img}
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
                </React.Fragment>
              ) : (
                  false
                )}

              {/* リスト表示 */}
              {props.dispType === 1 ? (
                <React.Fragment>
                  <img
                    src={item.img}
                    width="20%"
                    height="100px"
                    alt="blog img"
                    style={{ objectFit: 'cover' }}
                  />
                  <Box width="80%">
                    <h2
                      style={{
                        color: '#555',
                        fontSize: '96%',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        height: '40px',
                        padding: '15px 20px 5px 20px',
                        boxSizing: 'border-box'
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        color: '#777',
                        fontSize: '85%',
                        padding: '5px 20px',
                        boxSizing: 'border-box'
                      }}
                    >
                      {item.preview && item.preview + '...'}
                    </p>
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
