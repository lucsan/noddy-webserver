/*
Portal.js - acts as a portal to server executable (servable) pages.
These pages would be in the portal (or alias) folder.
 */
var fs = require('fs');

function portal () {

  if (config.web.files === undefined) {
    list = fs.readdirSync(config.web.portal);
    makeList(null, list);
  } else {
      fs.readdir(config.web.portal, makeList);
  }

  /**
   * Take the list of files in the portal directory and adds legitimate (config.web.exts)
   * to the list config.web.files.
   * @param  {[type]} err  [description]
   * @param  {[type]} list [description]
   */
  function makeList (err, list) {
    if (err) {
      tools.log('error', 'Portal read error', err);
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
  }
}

exports.portal = portal;
