import {Component, Input, Output, EventEmitter, Inject} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {MdInput} from '@angular2-material/input';

declare var ROLES: any;

@Component({
    selector: 'add',
    templateUrl: 'app/roles/add/add.html',
    styleUrls: ['app/roles/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton, MdInput],
    pipes: []
})
export class Add {
    @Input() show: boolean; 
    @Output() showChange = new EventEmitter(); 
    name: string;

    constructor(public angularFire:AngularFire){}

    doSave() {
        var roles = this.angularFire.database.list(ROLES);
        roles.push({
            name: this.name
        });
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }
}
