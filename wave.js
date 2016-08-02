/*
wave.js - wave to noddy. call tins file node wave.js to start the server.

 */
// Globals
config = require('./config');
tools =  require('./tools');

// Locals
var server = require('./server');
var router = require('./router');

tools.remarks(config.web.port, 'port');

server.start(router.route);
