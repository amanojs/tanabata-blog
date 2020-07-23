import * as React from 'react'
import MediaQuery from 'react-responsive'

interface Props {
  children: React.ReactNode
}

export const DeskTop: React.FC<Props> = (props) => {
  return <MediaQuery query="(min-width: 950px)">{props.children}</MediaQuery>
}

export const Mobile: React.FC<Props> = (props) => {
  return <MediaQuery query="(max-width: 949px)">{props.children}</MediaQuery>
}
