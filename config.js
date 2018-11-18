/*
config.js - global config values for noddy.
*/

var env = process.env.NODE_ENV || 'development'

// NOTE: exts in the exts array need a corresponding if statement in requester.js serveFile()
var web = {
  port: 8800,
  remarks: true,
  exts: ['php', 'htm', 'html', 'js', 'jpg', 'py'], // Order in this array is important.
  portal: 'portal' // Name of portal folder, ie: html, www, html_public, public, etc
}
var log = {
  on: true,
  to: 'cli', // Output messages to cli or file.
  path: '',// path for noddy.log file.
  file: 'noddy.log' // log file name.
}

exports.web = web;
exports.log = log;
