import {Component} from '@angular/core';
//import {Add} from './add/add';
import {Edit} from './edit/edit';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

declare var BOOKS: any;

@Component({
  selector: 'list-books',
  templateUrl: 'app/list-books/list-books.html',
  styleUrls: ['app/list-books/list-books.css'],
  providers: [AngularFire],
  //directives: [Add, Edit, MdButton, MD_CARD_DIRECTIVES],
    directives: [Edit,MdButton, MD_CARD_DIRECTIVES],
  pipes: []
})

export class ListBooks {
    showAdd: boolean = false;
    books: Observable<any[]>;

    constructor(angularFire: AngularFire){
//    constructor(){
        console.log('angular fire constructor');
        this.books = angularFire.database.list(BOOKS);
    }

    addBook(){
        this.showAdd = true;
    }
}
