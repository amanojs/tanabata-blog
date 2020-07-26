import * as React from 'react'
import { BlogDetail } from '../models/BlogDetail'
import { Paper, LinearProgress } from '@material-ui/core'
import { Markdown } from './Markdown'

interface Props {
  blogDetail: BlogDetail
  padding: string
}

export const BlogPaper: React.FC<Props> = (props) => {
  return (
    <Paper
      style={{
        width: '100%',
        minHeight: '90vh',
        padding: props.padding,
        boxSizing: 'border-box'
      }}
    >
      {props.blogDetail ? (
        <React.Fragment>
          <div>{props.blogDetail.created_at}</div>
          <span
            style={{
              display: 'inline-block',
              margin: ' 10px 0',
              padding: '5px 10px',
              backgroundColor: '#eee'
            }}
          >
            {props.blogDetail.tags}
          </span>
          <Markdown markdown={props.blogDetail.bodyContent} />
        </React.Fragment>
      ) : (
        <LinearProgress />
      )}
    </Paper>
  )
}
