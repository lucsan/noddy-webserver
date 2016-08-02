/**
 * router.js - routes requests.
 */

var portal = require('./portal');
var requester = require('./requester');
var url = require('url');

function route (request, response) {

  requestHeaders(request); // Inspects headers.
  filename = url.parse(request.url).pathname;
  filename = filename.substr(1, filename.length);
  tools.log('info',filename);
  var found = '';
  for (var i = 0, l = config.web.files.length; i < l; i++) {
    if (config.web.files[i] === filename) {
      found = filename;
      pieces = found.split('.');
      ext = pieces[pieces.length - 1];
      break;
    }
  }

  if (found) {
    requester.serveFile(filename, ext, response);

  }

  // if (typeof pathname === 'function') {
  //   pathname(response);
  // } else {
  //   console.log(typeof pathname);
  // }

}


function requestHeaders (request) {
  var method = request.method;
  var headers = request.headers;
  tools.log('note', method, headers);
}

exports.route = route;
