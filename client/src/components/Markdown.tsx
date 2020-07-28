import * as React from 'react'
const ReactMarkdown = require('react-markdown')
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import codestyle from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow'
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
            renderers={{ code: CodeBlock, image: ImgBlock }}
          ></ReactMarkdown>
        </Fade>
        <style jsx={true}>{`
          .markdown {
            min-width: 200px;
            font-size: 16px;
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
            font-size: 28px;
            border: 5px solid #116fab;
            border-width: 0 0 2px 30px;
          }
          .markdown p {
            font-size: 17.5px;
            padding-bottom: 13px;
            line-height: 30px;
            color: #333;
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
          .markdown ul,
          ol {
            list-style-position: inside;
          }
          .markdown li {
            padding-bottom: 5px;
            padding-left: 10px;
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
              border: 5px solid #116fab;
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
  let styles: any = 'none'
  if (
    language !== 'javascript' &&
    language !== 'typescript' &&
    language !== 'jsx' &&
    language !== 'tsx'
  )
    styles = codestyle
  return (
    <React.Fragment>
      <SyntaxHighlighter
        language={language}
        useInlineStyles={false}
        style={styles}
      >
        {value}
      </SyntaxHighlighter>

      <style jsx={true}>{`
        pre {
          padding: 20px 30px;
          background-color: #364549;
          color: #8bdf4c;
          margin: 20px 0;
          overflow: scroll;
          transform: translateZ(0);
        }
        code {
          font-size: 18px;
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo,
            Courier, monospace;
          font-weight: normal;
        }
        span.keyword {
          color: #ebd247;
        }
        span.punctuation {
          color: #e3e3e3;
        }
        span.operator {
          color: #ff8095;
        }
        span.maybe-class-name,
        span.class-name {
          color: #8bdf4c;
        }
        span.function {
          color: #ebd247;
        }
        span.comment {
          color: #9dabae;
        }
        @media screen and (max-width: 1500px) {
          code {
            font-size: 13.5px;
          }
        }
      `}</style>
    </React.Fragment>
  )
}

interface ImgProps {
  src: string
}

const ImgBlock: React.FC<ImgProps> = (props) => {
  return (
    <React.Fragment>
      <img src={props.src} style={{ objectFit: 'cover', maxWidth: '100%' }} />
    </React.Fragment>
  )
}
