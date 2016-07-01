import {Component, Input, Inject} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdInput} from '@angular2-material/input';
declare var LANGUAGES: any;

@Component({
    selector: '[language]',
    templateUrl: 'app/languages/edit/edit.html',
    styleUrls: ['app/languages/edit/edit.css'],
    providers: [],
    directives: [MdButton, MdCheckbox, MdInput],
    pipes: []
})
export class Edit {
    @Input() language: any;
    edit: boolean = false;

    constructor(public angularFire:AngularFire) {}

    doEdit(){
        this.edit = true
    }
    
    doSave(){
        var key: string = this.language.$key
        delete this.language.$key

        if(this.language.enabled){
            this.language.enabled = true
        }else{
            this.language.enabled = false
        }
        
        this.angularFire.database.list(LANGUAGES).update(key,
            this.language
            );
        this.edit = false;
    }

}
