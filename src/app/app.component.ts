import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ListBooks} from './list-books/list-books';
import {NavbarComponent} from './components/navbar.component';
import {ToolbarComponent} from './components/toolbar.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
    //providers: [ROUTER_PROVIDERS]
})


export class AppComponent {
    title = 'app works!';
}
