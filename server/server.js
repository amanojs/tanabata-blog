import express from 'express'
import path from 'path'
import multer from 'multer'
import cors from 'cors'
const router = express.Router()

const app = express()
app.use(cors())

app.use(
  '/index.bundle.js',
  express.static(path.join('./', 'client', 'dist', 'index.bundle.js'))
)

const storage = multer.diskStorage({
  // ファイルの保存先を指定
  destination: function (req, file, cb) {
    cb(null, '')
  },
  // ファイル名を指定(オリジナルのファイル名を指定)
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

router.post('/api/upload/', upload.single('file'), (req, res) => {
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
