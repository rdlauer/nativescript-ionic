import { ObservableArray } from 'data/observable-array';
import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { BasePage } from '../shared/BasePage';
//import dialogs = require("ui/dialogs");

let viewModel = new Observable({
	checkBoxItems: new ObservableArray([
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
	toggleChecked: function(args) {
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



class CheckBoxBase extends BasePage {
    mainContentLoaded(args: EventData) {
      args.object.bindingContext = viewModel;
    }
}

module.exports = new CheckBoxBase();