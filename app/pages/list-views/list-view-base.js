"use strict";
var observable_array_1 = require('data/observable-array');
var observable_1 = require('data/observable');
var BasePage_1 = require('../../shared/BasePage');
var viewModel = new observable_1.Observable({
    fakeListItems: new observable_array_1.ObservableArray([
        { artist: 'Arcade Fire', title: 'Funeral', img: 'arcade-fire.jpg' },
        { artist: 'Bon Iver', title: 'For Emma, Forever Ago', img: 'bon-iver.jpg' },
        { artist: 'Daft Punk', title: 'Random Access Memories', img: 'daft-punk.jpg' },
        { artist: 'Elbow', title: 'Build a Rocket Boys!', img: 'elbow.jpg' },
        { artist: 'LCD Soundsystem', title: 'This Is Happening', img: 'lcd-soundsystem.jpg' },
        { artist: 'Lucius', title: 'Wildewoman', img: 'lucius.jpg' },
        { artist: 'M83', title: 'Hurry Up We\'re Dreaming', img: 'm83.jpg' },
        { artist: 'The National', title: 'Trouble Will Find Me', img: 'the-national.jpg' },
        { artist: 'Peter Bjorn and John', title: 'Writer\'s Block', img: 'peter-bjorn-and-john.jpg' },
        { artist: 'Phosphorescent', title: 'Muchacho', img: 'phosphorescent.jpg' },
        { artist: 'Sylvan Esso', title: 'Sylvan Esso', img: 'sylvan-esso.jpg' },
        { artist: 'Yeah Yeah Yeahs', title: 'Fever To Tell', img: 'yeah-yeah-yeahs.jpg' }
    ]),
    fakeListItemsWithDividers: new observable_array_1.ObservableArray([
        { text: 'iOS', class: 'item item-divider' },
        { text: 'iPod', class: 'item' },
        { text: 'iPhone', class: 'item' },
        { text: 'iPad', class: 'item' },
        { text: 'Android', class: 'item item-divider' },
        { text: 'Nexus 6', class: 'item' },
        { text: 'Nexus 9', class: 'item' },
        { text: 'Android Wear', class: 'item' }
    ])
});
var ListViewBase = (function (_super) {
    __extends(ListViewBase, _super);
    function ListViewBase() {
        _super.apply(this, arguments);
    }
    ListViewBase.prototype.mainContentLoaded = function (args) {
        args.object.bindingContext = viewModel;
    };
    return ListViewBase;
}(BasePage_1.BasePage));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListViewBase;
//# sourceMappingURL=list-view-base.js.map