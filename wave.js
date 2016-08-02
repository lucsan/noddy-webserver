/*
wave.js - wave to noddy. call file node wave.js to start the server.

 */
// Globals
config = require('./config');
tools =  require('./tools');

// Locals
var server = require('./server');
var router = require('./router');

server.start(router.route);
