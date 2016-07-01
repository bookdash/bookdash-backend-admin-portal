import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ListBooks} from './list-books/list-books';
import {Contributors} from './contributors/contributors';
import {Roles} from './roles/roles';
import {NavbarComponent} from './components/navbar.component';
import {ToolbarComponent} from './components/toolbar.component';
import {AngularFire} from 'angularfire2'

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
    //providers: [ROUTER_PROVIDERS]
})


export class AppComponent {
    constructor(public angularFire: AngularFire){}
}
