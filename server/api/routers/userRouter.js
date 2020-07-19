module.exports = (app) => {
  console.log('routerfuynction')
  app.route('/test').get((req, res) => {
    return res.send('test')
  })
}
