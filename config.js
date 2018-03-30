/*
config.js - global config values for noddy.
*/

var env = process.env.NODE_ENV || 'development';

var web = {};
var log = {};

web.port = 8800;
web.remarks = true;
web.exts = ['php', 'htm', 'html', 'py']; // Order in this array is important.
web.portal = 'portal'; // Name of portal folder, ie: html, www, html_public, public, etc


log.on = true;
log.to = 'cli'; // cli or file.
log.path = ''; // path for noddy.log.
log.file = 'noddy.log'; // log file name.

exports.web = web;
exports.log = log;
