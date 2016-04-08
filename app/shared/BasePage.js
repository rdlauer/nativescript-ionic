"use strict";
var frame_1 = require("ui/frame");
var observable_1 = require("data/observable");
var appViewModel = new observable_1.Observable({
    selectedPage: "home",
    selectedStyle: "positive",
    title: "ActionBars"
});
var BasePage = (function () {
    function BasePage() {
    }
    BasePage.prototype.loaded = function (args) {
        var page = args.object;
        page.bindingContext = appViewModel;
    };
    BasePage.prototype.toggleDrawer = function () {
        var page = frame_1.topmost().currentPage;
        var drawer = page.getViewById("drawer");
        drawer.toggleDrawerState();
    };
    BasePage.prototype.navigate = function (args) {
        var pageName = args.view.rel.toLowerCase();
        appViewModel.set("title", args.view.title);
        appViewModel.set("selectedPage", pageName);
        frame_1.topmost().navigate("pages/" + pageName);
    };
    BasePage.prototype.changeActionBarStyle = function (args) {
        var style = args.object.rel.toLowerCase();
        appViewModel.set('selectedStyle', style);
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map