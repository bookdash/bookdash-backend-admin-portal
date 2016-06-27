import {Component, Input, Inject} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef, AngularFire} from 'angularfire2';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdInput} from '@angular2-material/input';
import {Observable} from 'rxjs/Observable';

declare var LANGUAGES: any;
declare var CONTRIBUTORS: any;
declare var BOOKS: any;

@Component({
    selector: '[book]',
    templateUrl: 'app/list-books/edit/edit.html',
    styleUrls: ['app/list-books/edit/edit.css'],
    providers: [AngularFire],
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
    angularFire: AngularFire;
    key: string;

    constructor(angularFire: AngularFire) {
        this.angularFire = angularFire;
    }

    
    ngOnInit(){
        console.log("hello")
        console.log(this.book)
        this.key = this.book.$key
        if(this.book != 'book')
        {

            var languages: Observable<any[]> = this.angularFire.database.list(LANGUAGES)

            languages.subscribe(
                (languagesRaw) => {
                    this.languageObject = this.book.bookLanguage;
                    languagesRaw.forEach((language) => {
                        if(language.$key === this.book.bookLanguage){
                            this.language = language.languageName;
                        }
                        var languageHash: any = language
                        languageHash['key'] = language.$key
                        this.languages.push(languageHash)
                    })


                }
            )

            var contributors: Observable<any[]> = this.angularFire.database.list(CONTRIBUTORS)
            contributors.subscribe(
                (contributorsRaw) => {
                    contributorsRaw.forEach((contributor) => {
                        var contributorHash: any = contributor
                        contributorHash['key'] = contributor.$key
                        if(this.book.contributors[contributor.$key]){
                            this.contributors.push(contributorHash)
                        }else{
                            this.allContributors.push(contributorHash)
                        }
                    })
                    
                }
            )


        }
    }
    /*            for(var book_contributor in this.book.contributors){
                  this.firebase.child(CONTRIBUTORS)
                  .child(book_contributor)
                  .once("value",
                  (contributor) => {
                  console.log(contributor.val());
                  this.contributors.push(contributor.val());
                  })
                  }
                  }
                  }
    */
    doEdit(){
        this.edit = true;
    }

    doCancel(){
        this.edit = false;
    }

    deleteContributor(contributor){
        /*        this.allContributors.push(contributor)
                  delete this.book.contributors[contributor.key]
                  for(var contributorIndex in this.contributors){
                  
                  if(this.contributors[contributorIndex].key === contributor.key){
                  this.contributors.splice(Number(contributorIndex), 1)
                  }
                  } */
    }

    addContributor(contributorKey){
        /*
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
        */
    }
    
    doSave(){
        /*
          console.log(this.book)
          delete this.book.$key
          this.firebase.child(BOOKS).child(this.key).set(
          this.book);
          this.edit = false;
        */
    }

}
