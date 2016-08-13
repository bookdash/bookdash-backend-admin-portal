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
    @Input() books: any;
    language: string;
    languages: Array<any> = [];
    contributors: Array<any> = [];
    allContributors: Array<any> = [];
    contributorsRaw: any;
    selectedContributor: any;
    key: string;

    constructor(public angularFire: AngularFire) {
    }

    get displayDate(){
        if (this.book.createdDate == null){
            this.book.createdDate = new Date().getTime();
        }
        return new Date(this.book.createdDate).toISOString().substring(0, 10);
    }

    set displayDate(e){
        console.log("displayDate - edit:" + e);
        let dateSplit = e.split('-');
        let d = new Date(Date.UTC(Number(dateSplit[0]), Number(dateSplit[1]) - 1, Number(dateSplit[2])));
        d.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1);
        this.book.createdDate = d.getTime();
    }
    ngOnInit(){
        this.key = this.book.$key
        if(this.book != 'book')
        {
            var languages: Observable<any[]> = this.angularFire.database.list(LANGUAGES)

            languages.subscribe(
                (languagesRaw) => {
                    this.languages = []
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
                    this.contributors = []
                    if(this.book.contributors === undefined){
                        this.book.contributors = {}
                    }
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
        for(var contributorIndex in this.allContributors){
            if(this.allContributors[contributorIndex].key === contributorKey){
                this.contributors.push(this.allContributors[contributorIndex])
                this.allContributors.splice(Number(contributorIndex), 1)
            }
        }
    }
    
    doSave(){
        var bookKey = this.book.$key
        delete this.book.$key
        this.books.update(bookKey, this.book)
        this.edit = false;
    }

}
