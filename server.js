/**
 * Server.js - the server engine for noddy.
 *
 * This is a minimalistic server.
 * Much of the work is done in router.js
 */

var router = require('./router');
var http = require("http");

function start () {
  http.createServer(onRequest).listen(config.web.port);
  tools.log('note', 'server started on localhost:' + config.web.port);
  function onRequest(request, response) {
    request.on('error', function(err){
      tools.log('error', 'request', err);
    });
    router.route(request, response);
  }
}

exports.start = start;
