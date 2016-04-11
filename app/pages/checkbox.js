"use strict";
var observable_array_1 = require('data/observable-array');
var observable_1 = require('data/observable');
var BasePage_1 = require('../shared/BasePage');
//import dialogs = require("ui/dialogs");
var viewModel = new observable_1.Observable({
    checkBoxItems: new observable_array_1.ObservableArray([
        { text: 'light', checked: true },
        { text: 'stable', checked: true },
        { text: 'positive', checked: true },
        { text: 'calm', checked: true },
        { text: 'balanced', checked: true },
        { text: 'energized', checked: true },
        { text: 'assertive', checked: true },
        { text: 'royal', checked: true },
        { text: 'dark', checked: true }
    ]),
    toggleChecked: function (args) {
        var item = args.view.bindingContext;
        item.checked = !item.checked;
        var index = viewModel.checkBoxItems.indexOf(item);
        // Use Object.assign to clone the object to ensure NativeScript
        // detects the change and updates the UI accordingly
        viewModel.checkBoxItems.setItem(index, Object.assign({}, item));
        // for (var property in item) {
        //     dialogs.alert({
        //         title: "title",
        //         message: property + ": " + item[property],
        //         okButtonText: "ok"
        //     })
        // }
    }
});
var CheckBoxBase = (function (_super) {
    __extends(CheckBoxBase, _super);
    function CheckBoxBase() {
        _super.apply(this, arguments);
    }
    CheckBoxBase.prototype.mainContentLoaded = function (args) {
        args.object.bindingContext = viewModel;
    };
    return CheckBoxBase;
}(BasePage_1.BasePage));
module.exports = new CheckBoxBase();
//# sourceMappingURL=checkbox.js.map