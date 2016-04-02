import {Component} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'add',
    templateUrl: 'app/contributors/add/add.html',
    styleUrls: ['app/contributors/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton],
    pipes: []
})
export class Add {
    name: string;
    avatarUrl: string;
    //roles = {'Designer': false, 'Illustrator': false, 'Writer': false,
      //       'Editor': false,  'Facilitator': false,
       //      'Management Team': false, 'Translator'};
    constructor() {}

    doSave() {

    }
}
