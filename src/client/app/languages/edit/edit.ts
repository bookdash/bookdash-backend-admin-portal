import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
declare var LANGUAGES: any;

@Component({
    selector: '[language]',
    templateUrl: 'app/languages/edit/edit.html',
    styleUrls: ['app/languages/edit/edit.css'],
    providers: [],
    directives: [MdButton, MdCheckbox],
    pipes: []
})
export class Edit {
    @Input() language: any;
    edit: boolean = false;

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {}

    doEdit(){
        this.edit = true
    }
    
    doSave(){
        var key: string = this.language.$key
        delete this.language.$key
        this.firebase.child(LANGUAGES).child(key).set(
            this.language
            );
        this.edit = false;
    }

}
