import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'sd-navbar',
    //  moduleId: module.id,
    templateUrl: 'app/components/navbar.component.html',
    styleUrls: ['app/components/navbar.component.css',
                'app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent {}
