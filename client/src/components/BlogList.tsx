import * as React from 'react'
import {
  Container,
  Paper,
  makeStyles,
  Box,
  useMediaQuery
} from '@material-ui/core'
import { Blog } from '../models/Blog'

interface OwnProps {
  blogs: Blog[]
}

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '20%',
    minWidth: 290,
    height: 350,
    margin: '10px 10px 0px'
  }
}))

export const BlogList: React.FC<OwnProps> = (props) => {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width:665px)')
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Box
          display="flex"
          flexWrap="wrap"
          margin="-10px -10px 0px"
          justifyContent={matches ? 'start' : 'center'}
        >
          {props.blogs.map((item: Blog, index: number) => (
            <Paper key={index} className={classes.paper}>
              {item.title}
            </Paper>
          ))}
          <Paper
            className={classes.paper}
          >{`マッチしているか${matches}`}</Paper>
          <Paper
            className={classes.paper}
            onClick={() => console.log(props.blogs)}
          >
            テスト
          </Paper>
        </Box>
      </Container>
    </React.Fragment>
  )
}
