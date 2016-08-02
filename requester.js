var external = require("child_process");
var fs = require('fs');

function test (response) {
  console.log('test called');
}

function serveFile (file, ext, response) {
  var callout = '';
  console.log('Handler: request called on ' + file);
  if (ext === 'php') {
    callout = 'ENV=dev php ' + config.web.portal + '/';
    executeData(callout, file, response);
  }

  if (ext === 'html') {
    callout = config.web.portal + '/' + file;
    var page = fs.readFileSync(callout);
    response.writeHead(200, {"Content-Type" : "text/html;charset=utf-8"});
    response.write(page);
    response.end();
  }
}

function executeData (callout, file, response)
{
  external.exec(callout + file + " ",
   function(err, stdout, stderr) { sendData(err, stdout, stderr, response); });
}

function sendData(err, stdout, stderr, response)
{
  //if (err) return sendError(500, stderr, response);
  response.writeHead(200,{"Content-Type": "text/html;charset=utf-8"});
  response.write(stdout);
  response.end();
}


exports.serveFile = serveFile;
