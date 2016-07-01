import {Component, Input, Output, EventEmitter, Inject} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdInput} from '@angular2-material/input';

declare var LANGUAGES: any;

@Component({
    selector: 'add',
    templateUrl: 'app/languages/add/add.html',
    styleUrls: ['app/languages/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton, MdCheckbox, MdInput],
    pipes: []
})

export class Add {
    @Input() show: boolean; 
    @Output() showChange = new EventEmitter(); 
    languageName: string;
    languageAbbreviation: string;
    enabled: boolean;

    constructor(public angularFire:AngularFire){}

    doSave() {
        var languages: any = this.angularFire.database.list(LANGUAGES);
        var languageEnabled = false
        if(this.enabled){
            languageEnabled = true
        }
        languages.push().set({
            languageName: this.languageName,
            languageAbbreviation: this.languageAbbreviation,
            enabled: languageEnabled
        });
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }
}
