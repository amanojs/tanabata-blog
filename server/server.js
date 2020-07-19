import express from 'express'
import path from 'path'

const app = express()
console.log(path.resolve('client/dist'))

app.use(
  '/index.bundle.js',
  express.static(path.join('./', 'client', 'dist', 'index.bundle.js'))
)

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
