import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
import {FirebaseAuth, AuthProviders} from 'angularfire2';
import {ListBooks} from './list-books/list-books';
import {Inject} from 'angular2/core';
import {NavbarComponent} from './components/navbar.component';
import {ToolbarComponent} from './components/toolbar.component';
import {Contributors} from './contributors/contributors'
import {Roles} from './roles/roles'

@Component({
    selector: 'book-dash-admin-app',
    providers: [ROUTER_PROVIDERS, AngularFire],
    templateUrl: 'app/book-dash-admin.html',
    directives: [ROUTER_DIRECTIVES,ListBooks, NavbarComponent, ToolbarComponent,
                 Contributors, Roles],
    styleUrls: ['app/book-dash-admin.css'],
    pipes: []
})

@RouteConfig([
    {path: '/', name: 'Books', component: ListBooks},
    {path: '/contributors', name: 'Contributors', component: Contributors},
    {path: '/roles', name: 'Roles', component: Roles}
].concat(CliRouteConfig))

export class BookDashAdminApp {

    constructor(@Inject(FirebaseAuth) public auth: FirebaseAuth){
    }

}
