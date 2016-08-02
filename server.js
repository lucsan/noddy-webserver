/**
 * Server.js - the server engine for noddy.
 *
 * This is a minimalistic server.
 * Much of the work is done in router.js
 */




var http = require("http");
var portal = require('./portal');

function start (route) {
    portal.portal(); // Refreshes list of known files in the portal folder.
  http.createServer(onRequest).listen(config.web.port);
  tools.log('note', 'server started');
  function onRequest(request, response) {
    request.on('error', function(err){
      tools.log('error', 'request', err);
    });
    route(request, response);
  }

}

exports.start = start;
