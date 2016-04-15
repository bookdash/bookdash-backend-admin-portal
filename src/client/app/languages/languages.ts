import {Component} from 'angular2/core';
import {Add} from './add/add';
import {Edit} from './edit/edit';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

declare var LANGUAGES: any;

@Component({
    selector: 'languages',
    templateUrl: 'app/languages/languages.html',
    styleUrls: ['app/languages/languages.css'],
    providers: [],
    directives: [Add, MdButton, MD_CARD_DIRECTIVES, Edit],
    pipes: []
})

export class Languages {
    showAdd: boolean = false;
    languages: Observable<any[]>;

    constructor(angularFire: AngularFire){
        this.languages = angularFire.list(LANGUAGES);
    }
    
    addLanguage(){
        this.showAdd = true;
    }

}
