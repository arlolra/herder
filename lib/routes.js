module.exports = function (app) {

  app.get('/', function (req, res, next) {
    req.send('hi')
    return next()
  })

}