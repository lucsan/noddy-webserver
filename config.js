/*
config.js - global config values for noddy.
*/

var env = process.env.NODE_ENV || 'development';

//var config = {};
var web = {};

web.port = 8888;
web.remarks = true;
web.exts = ['php', 'htm', 'html', 'py']; // Order in this array is important.
web.portal = 'portal'; // Name of portal folder, ie: html, www, html_public, public, etc

exports.web = web;
