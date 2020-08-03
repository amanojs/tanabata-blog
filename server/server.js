import express from 'express'
import path from 'path'
import multer from 'multer'
import cors from 'cors'
import fs from 'fs'
const ejs = require('ejs')

const app = express()
app.use(cors())
app.engine('ejs', ejs.renderFile)
app.set('view engine', 'ejs')

const URL = 'http://tanabatablog.net'

app.use('/static', express.static(path.join('./', 'server', 'static')))
app.use('/robots.txt', express.static(path.join('./', 'robots.txt')))
app.use(
  '/google979c0bc2279f3168.html',
  express.static(path.join('./', 'google979c0bc2279f3168.html'))
)

app.use(
  '/index.bundle.js',
  express.static(path.join('./', 'client', 'dist', 'index.bundle.js'))
)

app.use(
  '/0.chunk.js',
  express.static(path.join('./', 'client', 'dist', '0.chunk.js'))
)

app.use(
  '/1.chunk.js',
  express.static(path.join('./', 'client', 'dist', '1.chunk.js'))
)

app.use(
  '/2.chunk.js',
  express.static(path.join('./', 'client', 'dist', '2.chunk.js'))
)

app.use(
  '/3.chunk.js',
  express.static(path.join('./', 'client', 'dist', '3.chunk.js'))
)

app.use(
  '/4.chunk.js',
  express.static(path.join('./', 'client', 'dist', '4.chunk.js'))
)

app.use(
  '/5.chunk.js',
  express.static(path.join('./', 'client', 'dist', '5.chunk.js'))
)

app.use(
  '/6.chunk.js',
  express.static(path.join('./', 'client', 'dist', '6.chunk.js'))
)

app.use(
  '/7.chunk.js',
  express.static(path.join('./', 'client', 'dist', '7.chunk.js'))
)

app.use(
  '/8.chunk.js',
  express.static(path.join('./', 'client', 'dist', '8.chunk.js'))
)

app.use(
  '/vendors~index.chunk.js',
  express.static(path.join('./', 'client', 'dist', 'vendors~index.chunk.js'))
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
  res.sendFile(
    path.join(
      './',
      'blogs',
      'jsons',
      'JavaScriptでサーバから配信されているHTMLファイルを取得する.json'
    ),
    { root: '.' }
  )
})

app.get('/sitemap.xml', (req, res) => {
  const summary = JSON.parse(
    fs.readFileSync(path.join('./', 'blogs', 'summary.json'), 'utf8')
  )
  let urls = []
  Object.keys(summary.fileMap).forEach((key) => {
    urls = [...urls, URL + '/blog?title=' + summary.fileMap[key].title]
  })
  res.setHeader('Content-Type', 'text/xml')
  res.render('sitemap_base', { URL: URL, urls: urls })
})

app.get('/api/getBlogs/', (req, res) => {
  const summary = JSON.parse(
    fs.readFileSync(path.join('./', 'blogs', 'summary.json'), 'utf8')
  )
  let blogs = []
  Object.keys(summary.fileMap).forEach((key) => {
    blogs = [...blogs, summary.fileMap[key]]
  })
  if (!req.query.genre) return res.send(blogs)
  let genreBlogs = []
  for (let blog of blogs) {
    console.log(blog.tags)
    if (blog.tags == req.query.genre) genreBlogs = [...genreBlogs, blog]
  }
  return res.send(genreBlogs)
  //res.sendFile(path.join('./', 'blogs', 'summary.json'), { root: '.' })
})

app.get('/api/getBlog/', (req, res) => {
  res.sendFile(path.join('./', 'blogs', 'jsons', req.query.title + '.json'), {
    root: '.'
  })
})

app.get('/blog', (req, res) => {
  console.log('blogpage')
  const blog = JSON.parse(
    fs.readFileSync(
      path.join('./', 'blogs', 'jsons', `${req.query.title}.json`),
      'utf8'
    )
  )
  res.render('blogpage', { blog: blog, URL: URL })
})

app.get('*', (req, res) => {
  console.log('アクセスされました')
  res.sendFile(path.join('./', 'client', 'dist', 'index.html'), { root: '.' })
})

app.listen(3000, () => {
  console.log('server running...')
})
