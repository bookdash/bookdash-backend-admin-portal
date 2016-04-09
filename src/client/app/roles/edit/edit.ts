import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
declare var ROLES: any;

@Component({
    selector: 'edit',
    templateUrl: 'app/roles/edit/edit.html',
    styleUrls: ['app/roles/edit/edit.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class Edit {
    @Input() key: string; 
    @Input() name: string;
    edit: boolean = false;
    role: any;
    tableName: string = ROLES;

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {}

    doEdit(){
        this.firebase.child(this.tableName)
            .child(this.key)
            .once("value",
                  (role) => {
                      this.role = role.val();
                      this.edit = true;
                  }
                 );
    }

    doSave(){
        this.firebase.child(this.tableName).child(this.key).set(
            this.role);
        this.edit = false;
    }
}
