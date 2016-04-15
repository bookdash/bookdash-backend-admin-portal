import {Component, Inject, Input, Output, EventEmitter} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';

declare var ROLES: any;
declare var CONTRIBUTORS: any;
declare var BOOKS: any;


@Component({
    selector: 'add',
    templateUrl: 'app/list-books/add/add.html',
    styleUrls: ['app/list-books/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton, MdCheckbox],
    pipes: []
})

export class Add {
    @Input() show: boolean; 
    @Output() showChange = new EventEmitter();
    bookTitle: string;
    bookCoverPageUrl: string;
    contributors: any;
    contributorCheckboxes: any = [];

    constructor(@Inject(FirebaseRef) public firebase:Firebase,
                angularFire: AngularFire){
        this.firebase.child(CONTRIBUTORS)
            .once("value",
                  (contributors) => {
                      contributors.forEach((contributor) => {
                          this.contributorCheckboxes.push({key: contributor.key(),
                                                    name: contributor.val().name,
                                                    isChecked: false})
                      })
                  }
                 );
    }

}
