import {Component, Input, Inject, Output, EventEmitter} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef, AngularFire} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdInput} from '@angular2-material/input';
import {Observable} from 'rxjs/Observable';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

declare var ROLES: any;
declare var CONTRIBUTORS: any;
declare var LANGUAGES: any;
declare var BOOKS: any;


@Component({
    selector: 'add',
    templateUrl: 'app/list-books/add/add.html',
    styleUrls: ['app/list-books/add/add.css'],
    providers: [],
    directives: [MD_CARD_DIRECTIVES, MdButton, MdCheckbox, MdInput],
    pipes: []
})

export class Add {
    @Input() show: boolean; 
    @Input() books: any;
    @Output() showChange = new EventEmitter();
    bookTitle: string;
    bookDescription: string;
    bookCoverPageUrl: string;
    bookUrl: string;
    bookEnabled: any;
    bookLanguage: any;
    languages: any = [];
    contributors: any;
    contributorCheckboxes: any = [];

    constructor(public angularFire: AngularFire) {
        var languages: Observable<any[]> = this.angularFire.database.list(LANGUAGES)

        languages.subscribe(
            (languagesRaw) => {
                this.languages = []
                languagesRaw.forEach((language) => {
                    var languageHash: any = language
                    languageHash['key'] = language.$key
                    this.languages.push(languageHash)
                })
            })

        var contributors: Observable<any[]> = this.angularFire.database.list(CONTRIBUTORS)
        contributors.subscribe(
            (contributorsRaw) => {
                this.contributorCheckboxes = []
                contributorsRaw.forEach((contributor) => {
                    this.contributorCheckboxes.push({key: contributor.$key,
                                                     name: contributor.name,
                                                     isChecked: false})
                })
                
            }
        )
    }

    doSave() {
        var contributorsHash = {}

        for(var contributorCheckboxIndex in this.contributorCheckboxes){
            console.log(contributorCheckboxIndex)
            if(this.contributorCheckboxes[contributorCheckboxIndex].isChecked){
                contributorsHash[this.contributorCheckboxes[contributorCheckboxIndex].key] = true
            }
        }
        var bookData = {
            bookTitle: this.bookTitle,
            bookDescription : this.bookDescription,
            bookCoverPageUrl: this.bookCoverPageUrl,
            bookUrl: this.bookUrl,
            bookLanguage: this.bookLanguage,
            bookEnabled: this.bookEnabled.checked,
            contributors: contributorsHash
        }

        console.log(this.books)
        console.log(bookData)
        this.books.push().set(bookData);
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }

}
