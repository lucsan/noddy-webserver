/**
 * router.js - routes requests.
 */

var portal = require('./portal');
var requester = require('./requester');
var url = require('url');

function route (request, response) {
  requestHeaders(request); // Inspects headers.
  portal.portal();



  var filename = url.parse(request.url).pathname;
  filename = filename.substr(1, filename.length);
  var queryString = url.parse(request.url).search;
  tools.log('info',filename);

    // Loop through portal files to see if the requested one exists.
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
      requester.serveFile(filename, ext, queryString, response);
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
