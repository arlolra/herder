#!/usr/bin/env node

var express = require('express')
  , cons    = require('consolidate')
  , routes  = require('./lib/routes')
  , pack    = require('./package.json')
  , app     = express()
  , port    = 1337


// setup
app.engine('html', cons.hogan)
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

//use static for .onion
//app.configure('local', function () {
  app.use(express.static(__dirname + '/public'))
//})

// attach various things
routes(app)

// listen
app.listen(port, function () {
  console.log(pack.name + ' now listening on port ' + port)
})
