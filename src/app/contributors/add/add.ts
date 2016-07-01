import {Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';

declare var ROLES: any;
declare var CONTRIBUTORS: any;

@Component({
    selector: 'add',
    templateUrl: 'app/contributors/add/add.html',
    styleUrls: ['app/contributors/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton, MdCheckbox],
    pipes: []
})
export class Add {
    @Input() show: boolean; 
    @Input() contributors: any;
    @Output() showChange = new EventEmitter();
    name: string;
    avatarUrl: string;
    roles: any;
    roleCheckboxes: any = [];

    constructor(public angularFire: AngularFire){
        var roles: Observable<any[]> = this.angularFire.database.list(ROLES)

        roles.subscribe(
            (roles) => {
                this.roleCheckboxes = []

                roles.forEach((role) => {
                    this.roleCheckboxes.push({key: role.$key,
                                              name: role.name,
                                              isChecked: false})
                })
            }
        );
    }
    
    doSave() {
        var contributor = {
            name: this.name,
            avatar: this.avatarUrl,
            roles: {}
        }

        console.log(this.roleCheckboxes)
        for (var i = 0; i < this.roleCheckboxes.length; i++){
            if(this.roleCheckboxes[i].isChecked){
                contributor.roles[this.roleCheckboxes[i].key] = true
            }
        }
        this.contributors.push().set(contributor);
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }

}
