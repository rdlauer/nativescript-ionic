import { ObservableArray } from 'data/observable-array';
import { Observable, EventData } from 'data/observable';
import { Page } from 'ui/page';
import { BasePage } from '../../shared/BasePage';

let viewModel = new Observable({
    fakeListItems: new ObservableArray([
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
    fakeListItemsWithDividers: new ObservableArray([
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

class ListViewBase extends BasePage {
    mainContentLoaded(args: EventData) {
      args.object.bindingContext = viewModel;
    }
}

export default ListViewBase;