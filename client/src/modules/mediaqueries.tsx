import * as React from 'react'
import MediaQuery from 'react-responsive'

interface Props {
  children: React.ReactNode
}

export const DeskTop: React.FC<Props> = (props) => {
  return <MediaQuery query="(min-width: 960px)">{props.children}</MediaQuery>
}

export const Mobile: React.FC<Props> = (props) => {
  return <MediaQuery query="(max-width: 959px)">{props.children}</MediaQuery>
}
