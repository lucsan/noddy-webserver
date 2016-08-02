/*
Portal.js - acts as a portal to server executable (servable) pages.
These pages would be in the portal (or alias) folder.
 */
var fs = require('fs');

function portal () {
  var dir = config.web.portal;
  fs.readdir(dir, function (err, list) {
    if (err) {
      tools.remarks('Portal read error', err);
      return;
    }
    var found = [];
    list.forEach (function(file) {
      var frags = file.split('.');
      if (frags.length < 2) { tools.remarks('Portal file name issue', file); }
      exts = config.web.exts;
      exts.forEach (function(ext) {
        if (frags[1] === ext) {
          found.push(file);
        }
      });
    });
    config.web.files = found;
  });
}

exports.portal = portal;
