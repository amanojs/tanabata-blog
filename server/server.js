import express from 'express'
import path from 'path'
import multer from 'multer'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(
  '/index.bundle.js',
  express.static(path.join('./', 'client', 'dist', 'index.bundle.js'))
)

const storage = multer.diskStorage({
  destination: path.join('./', 'blogs', 'markdowns'),
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

app.post('/api/upload/', upload.single('file'), (req, res) => {
  const { execSync } = require('child_process')
  execSync('npm run md')

  res.json({ result: 'upload success.' })
})

const userRouter = require('./api/routers/userRouter')
userRouter(app)

app.get('/api', (req, res) => {
  res.send({ test: 'test response' })
})

app.get('/', (req, res) => {
  console.log('アクセスされました')
  res.sendFile(path.join('./', 'client', 'dist', 'index.html'), { root: '.' })
})

app.listen(3000, () => {
  console.log('server running...')
})
