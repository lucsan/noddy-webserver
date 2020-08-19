function log (status, message, error = '') {
  if (config.log.on !== true) { return }
  if (error === null || error === undefined) { error = '' }
  if (typeof error === 'object') { error = JSON.stringify(error) }
  date = new Date().toISOString().replace('T', ' ').substr(0, 19)
  let logLine = `status: ${date}: ${message}`
  if (error != '') logLine += `: ${error}`
  //var logLine = status + ': ' + date + ': ' + message + ': ' + error

  if (config.log.to == 'cli') {
    console.log(logLine)
  }

  // TODO: write to log file
}

function remarks (remark, title) {
  if (config.web.remarks) {
    var strTitle = ''
    if (title) {
      strTitle = title + ' - '
    }
    console.dir('remark: ' + strTitle + remark)
  }
}

exports.remarks = remarks
exports.log = log
