import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
declare var ROLES: any;
declare var CONTRIBUTORS: any;

@Component({
  selector: '[contributor]',
  templateUrl: 'app/contributors/edit/edit.html',
  styleUrls: ['app/contributors/edit/edit.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Edit {
    edit: boolean = false;
    @Input() contributor: any; 
    roles: any;
    roleCheckboxes: any = [];

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {
    }

    doEdit(){

        this.firebase.child(ROLES)
            .once("value",
                  (roles) => {
                      this.roles = roles.val();
                      this.edit = true;

                      console.log(this.contributor.roles)
                      console.log(this.roles.keys)
                      for (var role in this.roles) {
                          console.log(role)
                          console.log(this.roles[role])
                          /*this.roleCheckboxes.push({key: role.key(),
                                               name: role.val().name,
                                               isChecked: (role.key() in this.contributor.roles)})*/
                      }
                  }
                 );
    }

    doSave(){
        var key: string = this.contributor.$key
        delete this.contributor.$key
        this.firebase.child(CONTRIBUTORS).child(key).set(
            this.contributor
            );
        this.edit = false;
    }

}
