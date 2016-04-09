import {Component} from 'angular2/core';
import {Add} from './add/add';
import {MdButton} from '@angular2-material/button';

@Component({
    selector: 'contributors',
    templateUrl: 'app/contributors/contributors.html',
    styleUrls: ['app/contributors/contributors.css'],
    providers: [],
    directives: [Add, MdButton],
    pipes: []
})

export class Contributors {
    showAdd: boolean = false;

    constructor() {}

    addContributor(){
        this.showAdd = true;
    }
}
