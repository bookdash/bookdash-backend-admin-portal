import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
declare var LANGUAGES: any;
declare var CONTRIBUTORS: any;

@Component({
    selector: '[book]',
    templateUrl: 'app/list-books/edit/edit.html',
    styleUrls: ['app/list-books/edit/edit.css'],
    providers: [],
    directives: [MdCheckbox],
    pipes: []
})
export class Edit {
    edit: boolean = false;
    @Input() book: any; 
    language: string;

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {
    }

    ngOnInit(){
        console.log("hello")
        console.log(this.book)
        if(this.book != 'book')
            this.firebase.child(LANGUAGES)
            .child(this.book.bookLanguage)
            .once("value",
                  (language) => {
                      var languageObject = language.val();
                      this.language = languageObject.languageName
                      console.log(languageObject);
                  }
                 );

    }

}
