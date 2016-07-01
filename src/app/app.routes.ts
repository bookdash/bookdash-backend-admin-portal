import {provideRouter, RouterConfig} from "@angular/router"
import {ListBooks} from "./list-books/list-books"
import {Contributors} from './contributors/contributors';
import {Languages} from './languages/languages';

export const routes: RouterConfig = [
    {path: '', component: ListBooks},
    {path: 'contributors', component: Contributors},
    {path: 'languages', component: Languages}
/*    {path: '/contributors', name: 'Contributors', component: Contributors},
    {path: '/roles', name: 'Roles', component: Roles},
    {path: '/languages', name: 'Languages', component: Languages}*/
]
 

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
