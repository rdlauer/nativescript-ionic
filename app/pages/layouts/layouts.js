"use strict";
var BasePage_1 = require('../../shared/BasePage');
var utils = require("utils/utils");
var Page = (function (_super) {
    __extends(Page, _super);
    function Page() {
        _super.apply(this, arguments);
    }
    Page.prototype.mainContentLoaded = function () {
    };
    return Page;
}(BasePage_1.BasePage));
module.exports = new Page();
function rootGridLoaded(args) {
    var grid = args.object;
    if (grid.android) {
        var compat = android.support.v4.view.ViewCompat;
        if (compat.setElevation) {
            // Fix for the elevation glitch of the tab-view
            compat.setElevation(grid.android, 4 * utils.layout.getDisplayDensity());
        }
    }
}
exports.rootGridLoaded = rootGridLoaded;
//# sourceMappingURL=layouts.js.map