import {provideRouter, RouterConfig} from "@angular/router"
import {ListBooks} from "./list-books/list-books"
import {Contributors} from './contributors/contributors';
import {Languages} from './languages/languages';
import {Roles} from './roles/roles';

export const routes: RouterConfig = [
    {path: '', component: ListBooks},
    {path: 'contributors', component: Contributors},
    {path: 'languages', component: Languages},
    {path: 'roles', component: Roles}
]

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
]
