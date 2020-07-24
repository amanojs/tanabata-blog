import * as React from 'react'
const ReactMarkdown = require('react-markdown')
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { Fade } from '@material-ui/core'

interface Props {
  markdown: string
}

export const Markdown: React.FC<Props> = (props) => {
  if (props.markdown.length > 0) {
    return (
      <div className="markdown" id="markdown">
        <Fade in={props.markdown.length > 0}>
          <ReactMarkdown
            source={props.markdown}
            renderers={{ code: CodeBlock }}
          ></ReactMarkdown>
        </Fade>
        <style jsx={true}>{`
          .markdown {
            min-width: 200px;
            font-size: 20px;
          }
          .markdown h1 {
            font-size: 40px;
          }
          .markdown h2 {
            box-sizing: border-box;
            padding: 10px;
            margin: 80px 0 25px 0;
          }
          .markdown h2 {
            font-size: 30px;
            border: 5px solid #4bb543;
            border-width: 0 0 2px 30px;
          }
          .markdown p {
            font-size: 20px;
            padding-bottom: 13px;
            line-height: 30px;
            color: #444;
          }
          .markdown p code {
            padding: 5px 10px;
            background-color: #eee;
            border-radius: 3px;
            font-weight: bold;
          }
          .markdown blockquote {
            border: 1px solid #eee;
            border-width: 0 0 0 10px;
            padding: 20px 0 20px 30px;
          }
          .markdown blockquote p {
            color: #555;
            padding-bottom: 5px;
          }

          @media screen and (max-width: 600px) {
            .markdown h1 {
              font-size: 27px;
            }
            .markdown h2 {
              box-sizing: border-box;
              padding: 10px;
              margin: 50px 0 20px 0;
              font-size: 20px;
              border: 5px solid #4bb543;
              border-width: 0 0 2px 10px;
            }
            .markdown p {
              font-size: 16px;
              padding-bottom: 10px;
              line-height: 30px;
              color: #444;
            }
            .markdown p code {
              padding: 2.5px 5px;
              background-color: #eee;
              border-radius: 3px;
            }
            .markdown blockquote {
              padding: 10px 0 10px 10px;
            }
            .markdown blockquote p {
              padding-bottom: 5px;
            }
          }
        `}</style>
      </div>
    )
  } else {
    return
  }
}

interface CodeProps {
  value: string
  language?: string
}

const CodeBlock: React.FC<CodeProps> = ({ language, value }) => {
  return (
    <React.Fragment>
      <SyntaxHighlighter language={language} style={darcula}>
        {value}
      </SyntaxHighlighter>

      <style jsx={true}>{`
        @media screen and (max-width: 600px) {
          code {
            font-size: 15px;
          }
        }
      `}</style>
    </React.Fragment>
  )
}
