/*

 */

function remarks (remark, title) {
  if (config.web.remarks) {
    var strTitle = '';
    if (title) {
      strTitle = title + ' - ';
    }
    console.dir('remark: ' + strTitle + remark);
  }
}

exports.remarks = remarks;
