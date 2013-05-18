var test    = require('tape');
var subject = require('..');

test("obtains latest for the request module", function(t) {
  subject("request", function(error, latest) {
    t.equal(null, error, "Expect no error");
    t.ok("[Object]", typeof(latest));
    t.ok(latest.name, "Expect name property");
    t.ok(latest.dist.tarball, "Expect tarball property");
    t.end();
  });
});
