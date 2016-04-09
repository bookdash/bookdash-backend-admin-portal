import {Component, Inject, Input, Output, EventEmitter} from 'angular2/core';
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
    @Output() showChange = new EventEmitter();
    name: string;
    avatarUrl: string;
    roles: any;
    roleCheckboxes: any = [];

    constructor(@Inject(FirebaseRef) public firebase:Firebase,
                angularFire: AngularFire){
        this.firebase.child(ROLES)
            .once("value",
                  (roles) => {
                      roles.forEach((role) => {
                          this.roleCheckboxes.push({key: role.key(),
                                               name: role.val().name,
                                               isChecked: false})
                      })
                  }
                 );
    }
    
    doSave() {
        var contributors = this.firebase.child(CONTRIBUTORS);
        var contributor = {
            name: this.name,
            avatar: this.avatarUrl,
            roles: {}
        }

        console.log(this.roleCheckboxes)
        for (var i = 0; i < this.roleCheckboxes.length; i++){
            if(this.roleCheckboxes[i].isChecked == true){
                contributor.roles[this.roleCheckboxes[i].key] = true
            }
        }
        contributors.push().set(contributor);
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }

}
