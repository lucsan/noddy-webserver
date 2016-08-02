/*
Server.js - the server engine for noddy.
 */
//var tools =  require('./tools');
var http = require("http");
var url = require('url');
var portal = require('./portal');

function start (route) {
  portal.portal();
   function onRequest(request, response) {
     var pathname = url.parse(request.url).pathname;
     tools.remarks('request for ' + pathname + ' received');
     route(pathname, response);
   }

http.createServer(onRequest).listen(config.web.port);
tools.remarks('Server: Started');
}

exports.start = start;
