/**
 * Server.js - the server engine for noddy.
 *
 * This is a minimalistic server.
 * Much of the work is done in router.js
 */



var portal = require('./portal'); // Reads directory to see if there are any files to serve.
var router = require('./router');
var http = require("http");

function start () {
  //portal.portal(); // Initiallise list of known files in the portal folder.
  http.createServer(onRequest).listen(config.web.port);
  tools.log('note', 'server started');
  function onRequest(request, response) {
    request.on('error', function(err){
      tools.log('error', 'request', err);
    });
    router.route(request, response);
  }
}

exports.start = start;
