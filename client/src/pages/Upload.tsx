import * as React from 'react'
import axios from 'axios'

export const Upload: React.FC = () => {
  const [files, setFiles] = React.useState<FileList | null>(null)
  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    setFiles(e.target.files)
  }
  const upFile = () => {
    console.log(files)
    const params = new FormData()
    params.append('file', files[0])
    axios
      .post('/api/upload/', params, {
        headers: { 'content-type': 'multipart/form-data' }
      })
      .then((result) => {
        console.log('upload success', result)
      })
      .catch(() => {
        console.log('upload failed')
      })
  }
  return (
    <React.Fragment>
      <input
        type="file"
        multiple
        name="mdfile"
        onChange={(e) => selectFile(e)}
      />
      <button onClick={() => upFile()}>送信</button>
    </React.Fragment>
  )
}
