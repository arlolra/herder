var restify = require('restify')

module.exports = function (app) {

  app.get('/', function (req, res, next) {
    return next()
  })

}