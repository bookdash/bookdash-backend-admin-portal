import {Component, Input, Output, EventEmitter, Inject} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';

@Component({
    selector: 'add',
    templateUrl: 'app/roles/add/add.html',
    styleUrls: ['app/roles/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton],
    pipes: []
})
export class Add {
    @Input() show: boolean; 
    @Output() showChange = new EventEmitter(); 
    name: string;

    constructor(@Inject(FirebaseRef) public firebase:Firebase){}

    doSave() {
        var roles = this.firebase.child('bd_roles');
        roles.push().set({
            name: this.name
        });
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }
}
