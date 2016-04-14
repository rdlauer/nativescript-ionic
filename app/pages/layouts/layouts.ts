import { BasePage } from '../../shared/BasePage';
import observable = require("data/observable");
import gridModule = require("ui/layouts/grid-layout");
import utils = require("utils/utils");
import {Color} from "color";

class Page extends BasePage {
    mainContentLoaded() {

    }
}

module.exports = new Page();

export function rootGridLoaded(args: observable.EventData) {
    var grid = <gridModule.GridLayout>args.object;

    if (grid.android) {
        var compat = <any>android.support.v4.view.ViewCompat;
        if (compat.setElevation) {
            // Fix for the elevation glitch of the tab-view
            compat.setElevation(grid.android, 4 * utils.layout.getDisplayDensity());
        }
    }
}