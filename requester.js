var external = require("child_process");
var fs = require('fs');

function test (response) {
  console.log('test called');
}

function serveFile (file, ext, queryString, response) {
  var callout = '';
  tools.log('info', 'Request called on ' + file + ' ' + queryString);

  if (ext === 'php') {

    //callout = 'NODE_ENV=dev php ' + config.web.portal + '/' + file + ' ' + queryString;
    callout = 'php ' + config.web.portal + '/' + file + ' ' + queryString;
    tools.log('debug', 'callout', callout);
    executeData(callout, response);
  }

  if (ext === 'html') {
    callout = config.web.portal + '/' + file;
    // This needs to be made async.
    var page = fs.readFileSync(callout);
    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write(page);
    response.end();
  }
}

function executeData (callout, response) {
  external.exec(callout, function (err, stdout, stderr) {
       sendData(stdout, response);
     });
}

function sendData (stdout, response) {
  tools.log('debug', 'stdout', stdout);
  response.writeHead(200,{"Content-Type": "text/html;charset=utf-8"});
  response.write(stdout);
  response.end();
}




exports.serveFile = serveFile;
