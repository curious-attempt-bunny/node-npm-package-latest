var request = require('request');

module.exports = function(packageName, next) {
  var url = 'http://isaacs.iriscouch.com/registry/'+packageName;
  request(url, function(error, response, body) {
    if (error) {
      next(error);
      return;
    }

    var doc = JSON.parse(body);

    if (!doc || !doc.versions) {
      next(new Error("package not found"));
    }

    var versions = Object.keys(doc.versions);
    var latest = doc.versions[versions[versions.length-1]];
    next(null, latest);
  });
}; 
