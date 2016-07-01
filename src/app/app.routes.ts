import {provideRouter, RouterConfig} from "@angular/router"
import {ListBooks} from "./list-books/list-books"
import {Contributors} from './contributors/contributors';

export const routes: RouterConfig = [
    {path: '', component: ListBooks},
    {path: 'contributors', component: Contributors}
/*    {path: '/contributors', name: 'Contributors', component: Contributors},
    {path: '/roles', name: 'Roles', component: Roles},
    {path: '/languages', name: 'Languages', component: Languages}*/
]
 

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
