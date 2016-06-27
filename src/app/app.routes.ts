import {provideRouter, RouterConfig} from "@angular/router"
import {ListBooks} from "./list-books/list-books"

export const routes: RouterConfig = [
    {path: '', component: ListBooks}//,
/*    {path: '/contributors', name: 'Contributors', component: Contributors},
    {path: '/roles', name: 'Roles', component: Roles},
    {path: '/languages', name: 'Languages', component: Languages}*/
]
 

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
