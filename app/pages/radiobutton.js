"use strict";
var observable_1 = require('data/observable');
var BasePage_1 = require('../shared/BasePage');
var RadioButtonBase = (function (_super) {
    __extends(RadioButtonBase, _super);
    function RadioButtonBase() {
        _super.apply(this, arguments);
    }
    RadioButtonBase.prototype.mainContentLoaded = function (args) {
        var obj = new observable_1.Observable();
        obj.set("selected", "rb-3");
        obj.set("tap", function (args) {
            setTimeout(function () {
                obj.set("selected", args.object.id);
            }, 100);
        });
        args.object.bindingContext = obj;
    };
    return RadioButtonBase;
}(BasePage_1.BasePage));
module.exports = new RadioButtonBase();
//# sourceMappingURL=radiobutton.js.map