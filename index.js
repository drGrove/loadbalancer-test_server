'use strict'

var express = require('express'),
    os = require('os'),
    app = express()

  try {
    var config = require('./config.json')
  } catch(e) {
    var config = {}
  }

config =
{ app:
  { host: process.env.APP_HOST || (config.app || {}).host || '127.0.0.1'
  , port: process.env.APP_PORT || (config.app || {}).port || 8888
  }
}

app.get('/', function(req, res){
  res.send({
    timestamp: new Date().getTime(),
    host: os.hostname()
  })
})

app.listen(config.app.port, config.app.host, function(){
  console.log('Listening on http://%s:%s', config.app.host, config.app.port)
})
