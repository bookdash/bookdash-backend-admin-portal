import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdInput} from '@angular2-material/input';

declare var LANGUAGES: any;
declare var CONTRIBUTORS: any;
declare var BOOKS: any;

@Component({
    selector: '[book]',
    templateUrl: 'app/list-books/edit/edit.html',
    styleUrls: ['app/list-books/edit/edit.css'],
    providers: [],
    directives: [MdCheckbox, MdInput],
    pipes: []
})
export class Edit {
    edit: boolean = false;
    @Input() book: any; 
    language: string;
    languageObject: any;
    languages: Array<any> = [];
    contributors: Array<any> = [];
    allContributors: Array<any> = [];
    contributorsRaw: any;
    selectedContributor: any;
    key: string;

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {
    }

    ngOnInit(){
        console.log("hello")
        console.log(this.book)
        this.key = this.book.$key
        if(this.book != 'book')
        {
            this.firebase.child(LANGUAGES)
            .once("value",
                  (languages) => {
                      var languagesRaw = languages.val();
                      this.language = languagesRaw[this.book.bookLanguage].languageName;
                      this.languageObject = this.book.bookLanguage;
                      languages.forEach((language) => {
                          console.log(language.val())
                          var languageHash: any = language.val()
                          languageHash['key'] = language.key()
                          console.log(languageHash)
                          this.languages.push(languageHash)
                      })

                  }
                 );

            this.firebase.child(CONTRIBUTORS)
                .once("value",
                      (contributors) => {
                          this.contributorsRaw = contributors.val();
                          contributors.forEach((contributor) => {
                              var contributorHash: any = contributor.val()
                              contributorHash['key'] = contributor.key()
                              if(this.book.contributors[contributor.key()]){
                                  this.contributors.push(contributorHash)
                              }else{
                                  this.allContributors.push(contributorHash)
                              }
                          })
                          
                      }
                     )
            /*for(var book_contributor in this.book.contributors){
                this.firebase.child(CONTRIBUTORS)
                    .child(book_contributor)
                    .once("value",
                          (contributor) => {
                              console.log(contributor.val());
                              this.contributors.push(contributor.val());
                          })
            }*/
        }
    }

    doEdit(){
        this.edit = true;
    }

    doCancel(){
        this.edit = false;
    }

    deleteContributor(contributor){
        this.allContributors.push(contributor)
        delete this.book.contributors[contributor.key]
        for(var contributorIndex in this.contributors){
            
            if(this.contributors[contributorIndex].key === contributor.key){
                this.contributors.splice(Number(contributorIndex), 1)
            }
        }
    }

    addContributor(contributorKey){
        this.book.contributors[contributorKey] = true
        var tempContributor = this.contributorsRaw[contributorKey]
        tempContributor['key'] = contributorKey
        this.contributors.push(tempContributor)
        for(var contributorIndex in this.allContributors){
            if(this.allContributors[contributorIndex].key === contributorKey){
                this.allContributors.splice(Number(contributorIndex), 1)
            }
        }
        console.log(contributorKey)
    }
    
    doSave(){
        console.log(this.book)
        delete this.book.$key
        this.firebase.child(BOOKS).child(this.key).set(
            this.book);
        this.edit = false;
    }

}
