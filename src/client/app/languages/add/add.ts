import {Component, Input, Output, EventEmitter, Inject} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';

declare var LANGUAGES: any;

@Component({
    selector: 'add',
    templateUrl: 'app/languages/add/add.html',
    styleUrls: ['app/languages/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton, MdCheckbox],
    pipes: []
})

export class Add {
    @Input() show: boolean; 
    @Output() showChange = new EventEmitter(); 
    languageName: string;
    languageAbbreviation: string;
    enabled: boolean;

    constructor(@Inject(FirebaseRef) public firebase:Firebase){}

    doSave() {
        var languages = this.firebase.child(LANGUAGES);
        languages.push().set({
            languageName: this.languageName,
            languageAbbreviation: this.languageAbbreviation,
            enabled: this.enabled
        });
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }
}
