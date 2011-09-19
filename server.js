#!/usr/bin/env node

var express = require('express')
  , redis   = require('redis')
  , routes  = require('./lib/routes')
  , port    = 1337

const app   = express.createServer()
    , r     = redis.createClient()

app.configure(function () {
  this.use(express.static(__dirname + '/public'))
      .use(express.bodyParser())
      .set('view engine', 'hbs')
      .set('view option', { layout: true })
      .set('redis', r)
})

routes(app)
app.listen(port)