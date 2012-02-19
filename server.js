#!/usr/bin/env node

var restify = require('restify')
  , redis   = require('redis')
  , routes  = require('./lib/routes')
  , pack    = require('./package.json')
  , port    = 1337


// setup 
var app = restify.createServer({
    name    : pack.name
  , version : pack.version
})
app.use(restify.queryParser())

// attach the routes 
routes(app)

// listen
app.listen(port, function () {
  console.log(pack.name + ' now listening on port ' + port)
})