/*
Portal.js - acts as a portal to server executable (servable) pages.
These pages are in the portal (or portal alias) folder.

Each asset (file) requested needs to be returned, so, an html page with a javascript file
reference and an image needs to return 3 files, the html page, the javascript file and the image.

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
   * Take the list of files in the portal directory and add legitimate (config.web.exts)
   * to the new list config.web.files. This provied filtering for only permitted file exts.
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
