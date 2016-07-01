import {Component, Input, Inject} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {MdInput} from '@angular2-material/input';

declare var ROLES: any;

@Component({
    selector: 'edit',
    templateUrl: 'app/roles/edit/edit.html',
    styleUrls: ['app/roles/edit/edit.css'],
    providers: [],
    directives: [MdInput],
    pipes: []
})
export class Edit {
    @Input() role: any; 
    edit: boolean = false;
    tableName: string = ROLES;

    constructor(public angularFire:AngularFire) {}

    doEdit(){
        this.edit = true
    }

    doSave(){
        var key = this.role.$key
        delete this.role.$key
        this.angularFire.database.list(this.tableName).update(key,
            this.role);
        this.edit = false;
    }
}
