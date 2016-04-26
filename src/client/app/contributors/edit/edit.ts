import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
declare var ROLES: any;
declare var CONTRIBUTORS: any;

@Component({
    selector: '[contributor]',
    templateUrl: 'app/contributors/edit/edit.html',
    styleUrls: ['app/contributors/edit/edit.css'],
    providers: [],
    directives: [MdCheckbox],
    pipes: []
})
export class Edit {
    edit: boolean = false;
    @Input() contributor: any; 
    roles: any;
    roleCheckboxes: any = [];
    rolesString: string = "";

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {
        this.firebase.child(ROLES)
            .once("value",
                  (roles) => {
                      this.roles = roles.val();

                      this.roleCheckboxes = []
                      for (var roleKey in this.roles) {
                          var role = this.roles[roleKey]
                          if(this.contributor.roles !== undefined){
                              if(this.contributor.roles[roleKey] == true){
                                  this.rolesString = this.rolesString + " " +
                                      role.name;
                              }
                              this.roleCheckboxes.push({key: roleKey,
                                                        name: role.name,
                                                        //isChecked: false})
                                                        isChecked: (this.contributor.roles[roleKey] == true)})
                          }
                      }
                  }
                 );

    }

    doEdit(){
        this.edit = true
    }

    doSave(){
        var key: string = this.contributor.$key
        delete this.contributor.$key

        this.contributor.roles = {}
        for(var roleCheckbox in this.roleCheckboxes){
            if(this.roleCheckboxes[roleCheckbox].isChecked){
                this.contributor.roles[this.roleCheckboxes[roleCheckbox].key] = true
            }
        }

        this.firebase.child(CONTRIBUTORS).child(key).set(
            this.contributor
        );
        this.edit = false;
    }

}
