var external = require("child_process");
var fs = require('fs');

function serveFile (file, ext, queryString, response) {
  let callout = ''
  if (queryString == null) queryString = ''
  tools.log('info', 'Request called on ' + file + ' ' + queryString)

  const execOut = (callout) => {
    tools.log('debug', 'callout', callout)
    executeData(callout, response)
  }

  const writeOut = (callout, type = null) => {
    if (type == null) type = 'text/html;charset=utf-8'
    fs.readFile(callout,  (err, page) => {
      if (err) tools.log('error', err)
      response.writeHead(200, {"Content-Type" : type})
      response.write(page)
      response.end()
    })
  }

  // IMPORTANT: ext refs in the following if statements (ie: php, html, js)
  // need to be added to the exts array in config.web.portal (ie: config.js)
  if (ext === 'php') {
    execOut(`php ${config.web.portal}/${file} ${queryString}`)
  }

  if (ext === 'html') {
    writeOut(`${config.web.portal}/${file}`)
  }

  if (ext === 'jpg') {
    writeOut(`${config.web.portal}/${file}`)
  }

  if (ext === 'js') {
    writeOut(`${config.web.portal}/${file}`)
  }

}

// executeData uses exec, so use this for shells (ie: php and bash)
function executeData (callout, response) {
  external.exec(callout, function (err, stdout, stderr) {
       sendData(stdout, response)
     });
}

function sendData (stdout, response) {
  tools.log('debug', 'stdout', stdout)
  response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"})
  response.write(stdout)
  response.end()
}

exports.serveFile = serveFile
