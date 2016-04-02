import {Component} from 'angular2/core';
import {Add} from './add/add';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
    selector: 'roles',
    templateUrl: 'app/roles/roles.html',
    styleUrls: ['app/roles/roles.css'],
    providers: [],
    directives: [Add, MdButton, MD_CARD_DIRECTIVES],
    pipes: []
})
export class Roles {
    showAdd: boolean = false;
    roles: Observable<any[]>;
    
    constructor(angularFire: AngularFire){
        this.roles = angularFire.list('/bd_roles');
    }

    addRole(){
        this.showAdd = true;
    }

}
