var portal = require('./portal');
var request = require('./request');

function route (pathname, response) {
  filename = pathname.replace('/', '');
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
    request.serveFile(filename, ext, response);
    // response.writeHead(404, {"Content-Type": "text/html;charset=utf-8"});
    // response.write('Oh bugger no such page etc... error.');
    // response.end();
  }



console.log('found= '+found);

  if (typeof pathname === 'function') {
    pathname(response);
  } else {
    console.log(typeof pathname);
  }


  // console.log("route: About to route a request for " + pathname);
  // i = pathname.indexOf('php');
  // console.log('indexof php = ' + i);
  // if (typeof handle[pathname] === 'function') {
  //   handle[pathname](response);
  // } else {
  //   console.log('route: No handler found for ' + pathname);
  //   response.writeHead(404, {"Content-Type": "text/plain"});
  //   response.write('Oh bugger no such page etc... error.');
  //   response.end();
  // }
}

exports.route = route;
