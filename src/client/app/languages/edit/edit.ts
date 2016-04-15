import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
declare var LANGUAGES: any;

@Component({
    selector: 'edit',
    templateUrl: 'app/languages/edit/edit.html',
    styleUrls: ['app/languages/edit/edit.css'],
    providers: [],
    directives: [],
    pipes: []
})
export class Edit {
    @Input() key: string; 
    @Input() languageName: string;
    @Input() languageAbbreviation: string;
    @Input() enabled: string;
    edit: boolean = false;
    language: any;

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {}

}
