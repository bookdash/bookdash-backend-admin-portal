import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'sd-navbar',
    //  moduleId: module.id,
    templateUrl: 'app/components/navbar.component.html',
    styleUrls: ['app/components/navbar.component.css',
                'app/book-dash-admin.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
