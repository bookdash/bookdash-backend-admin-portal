import {Component} from 'angular2/core';
import {Add} from './add/add';
import {MdButton} from '@angular2-material/button';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  selector: 'list-books',
  templateUrl: 'app/list-books/list-books.html',
  styleUrls: ['app/list-books/list-books.css'],
  providers: [AngularFire],
  directives: [Add, MdButton, MD_CARD_DIRECTIVES],
  pipes: []
})

export class ListBooks {
    showAdd: boolean = false;
    items: Observable<any[]>;

     constructor(angularFire: AngularFire){
        console.log('angular fire constructor');
        this.items = angularFire.list('/book');
    }

    addBook(){
        this.showAdd = true;
    }
}
