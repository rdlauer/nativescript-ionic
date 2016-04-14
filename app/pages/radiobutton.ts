import { ObservableArray } from 'data/observable-array';
import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { BasePage } from '../shared/BasePage';

class RadioButtonBase extends BasePage {
    mainContentLoaded(args: EventData) {
        var obj = new Observable();
        obj.set("selected", "rb-3");
        obj.set("tap", function(args){
        setTimeout(function() {
                obj.set("selected", args.object.id);
            }, 100);
        });

        args.object.bindingContext = obj;
    }
}

module.exports = new RadioButtonBase();