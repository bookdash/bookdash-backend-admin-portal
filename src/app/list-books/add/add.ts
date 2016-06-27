import {Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdButton} from '@angular2-material/button';
//import {AngularFire} from 'angularfire2';
//import {Observable} from 'rxjs/Observable';
//import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdInput} from '@angular2-material/input';

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
    @Output() showChange = new EventEmitter();
    bookTitle: string;
    bookDescription: string;
    bookCoverPageUrl: string;
    bookUrl: string;
    bookEnabled: boolean;
    bookLanguage: any;
    languages: any = [];
    contributors: any;
    contributorCheckboxes: any = [];

    /*constructor(@Inject(FirebaseRef) public firebase:Firebase,
                angularFire: AngularFire){
        this.firebase.child(CONTRIBUTORS)
            .once("value",
                  (contributors) => {
                      contributors.forEach((contributor) => {
                          this.contributorCheckboxes.push({key: contributor.key(),
                                                           name: contributor.val().name,
                                                           isChecked: false})
                      })
                  }
                 );
        
        this.firebase.child(LANGUAGES)
            .once("value",
                  (languages) => {
                      languages.forEach((language) => {
                          console.log(language.val())
                          var languageHash: any = language.val()
                          languageHash['key'] = language.key()
                          console.log(languageHash)
                          this.languages.push(languageHash)
                      })
                      console.log(languages.val())
                  }
                 );

    }

    doSave() {
        var books = this.firebase.child(BOOKS);

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
            bookEnabled: this.bookEnabled,
            contributors: contributorsHash
        }
        
        books.push().set(bookData);
        this.doCancel();
    }

    doCancel(){
        this.show = false;
        this.showChange.emit(this.show);
    }*/

}
