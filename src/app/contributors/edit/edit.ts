import {Component, Input, Inject} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
import {Observable} from 'rxjs/Observable';
import {MdInput} from '@angular2-material/input';
declare var ROLES: any;
declare var CONTRIBUTORS: any;

@Component({
    selector: '[contributor]',
    templateUrl: 'app/contributors/edit/edit.html',
    styleUrls: ['app/contributors/edit/edit.css'],
    providers: [],
    directives: [MdCheckbox, MdInput],
    pipes: []
})
export class Edit {
    edit: boolean = false;
    @Input() contributor: any; 
    roles: any;
    roleCheckboxes: any = [];
    rolesString: string = "";

    constructor(public angularFire:AngularFire) {
    }

    ngOnInit(){
        var roles: Observable<any[]> = this.angularFire.database.list(ROLES)

        roles.subscribe(
            (roles) => {
                this.roles = roles;
                this.roleCheckboxes = []
                this.rolesString = ''
                for (var roleKey in this.roles) {
                    var role = this.roles[roleKey]
                    if(this.contributor.roles !== undefined){
                        if(this.contributor.roles[role.$key] == true){
                            this.rolesString = this.rolesString + " " +
                                role.name;
                        }
                        this.roleCheckboxes.push({key: role.$key,
                                                  name: role.name,
                                                  isChecked: (this.contributor.roles[role.$key] == true)})
                    } else {
                        this.roleCheckboxes.push({key: role.$key,
                                                  name: role.name,
                                                  isChecked: false})
                    }
                }
            }
        );

    }

    doEdit(){
        this.edit = true
    }

    doSave(){
        var contributors = this.angularFire.database.list(CONTRIBUTORS)
        var key: string = this.contributor.$key
        delete this.contributor.$key

        this.contributor.roles = {}
        for(var roleCheckbox in this.roleCheckboxes){
            if(this.roleCheckboxes[roleCheckbox].isChecked){
                this.contributor.roles[this.roleCheckboxes[roleCheckbox].key] = true
            }
        }

        contributors.update(key, this.contributor)
        this.edit = false;
    }

}
