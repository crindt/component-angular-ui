// temporarily make angular a global
window.angular = require("angular")
require("./angular-ui");
require("./angular-ui-ieshiv");
// no exports
(function () { delete window.angular; })(); // unset global
