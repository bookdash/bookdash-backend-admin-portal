import {Component} from 'angular2/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'list-books',
  templateUrl: 'app/list-books/list-books.html',
  styleUrls: ['app/list-books/list-books.css'],
  providers: [AngularFire],
  directives: [],
  pipes: []
})
export class ListBooks {
    items: Observable<any[]>;

     constructor(angularFire: AngularFire){
        console.log('angular fire constructor');
        this.items = angularFire.list('/book');
    }

}
