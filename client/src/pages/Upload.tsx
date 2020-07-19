import * as React from 'react'

export const Upload: React.FC = () => {
  const [files, setFiles] = React.useState<FileList | null>(null)
  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    setFiles(e.target.files)
  }
  const sendFile = () => {
    console.log(files)
    const params = new FormData()
    params.append('file', files[0])
  }
  return (
    <React.Fragment>
      <input type="file" name="mdfile" onChange={(e) => selectFile(e)} />
      <button onClick={() => sendFile()}>送信</button>
    </React.Fragment>
  )
}
