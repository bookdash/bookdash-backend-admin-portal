import {Component} from '@angular/core';
import {Add} from './add/add';
import {Edit} from './edit/edit';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
declare var CONTRIBUTORS: any;

@Component({
    selector: 'contributors',
    templateUrl: 'app/contributors/contributors.html',
    styleUrls: ['app/contributors/contributors.css'],
    providers: [],
    directives: [Add, MdButton, MD_CARD_DIRECTIVES, Edit],
    pipes: []
})

export class Contributors {
    showAdd: boolean = false;
    contributors: Observable<any[]>;
    
    constructor(public angularFire: AngularFire){
        this.contributors = angularFire.database.list(CONTRIBUTORS);
    }

    addContributor(){
        this.showAdd = true;
    }
}
