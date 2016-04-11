import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Button} from "ui/button";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";

let appViewModel = new Observable({
    selectedPage: "home",
    selectedStyle: "positive",
    title: "ActionBars"
});

export abstract class BasePage {
    //implement this function in the inheriting pages to set their specific binding context
    abstract mainContentLoaded(args:EventData);
    
    loaded(args){
        let page = <Page>args.object;
        page.bindingContext = appViewModel;
    }
    
    toggleDrawer(){
        let page = <Page>topmost().currentPage;
        let drawer = <any>page.getViewById("drawer");
        drawer.toggleDrawerState();
    }
    
    navigate(args){
        let pageName = args.view.rel.toLowerCase();
        appViewModel.set("title", args.view.title);
        appViewModel.set("selectedPage", pageName);
        topmost().navigate("pages/" + pageName);
    }
    
    changeActionBarStyle(args: EventData) {
        let style = <Button>args.object.rel.toLowerCase();
        appViewModel.set('selectedStyle', style);
    }
}