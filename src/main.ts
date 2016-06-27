import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment, APP_ROUTER_PROVIDERS} from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire,
        firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';


if (environment.production) {
    enableProdMode();
}

bootstrap(AppComponent,
          [APP_ROUTER_PROVIDERS,
           FIREBASE_PROVIDERS,
           defaultFirebase({
               apiKey: "AIzaSyDcjx0c_7C5wcisNm-NFimYIPZUuPQvuxY",
               authDomain: "book-dash-a93c3.firebaseapp.com",
               databaseURL: "https://book-dash-a93c3.firebaseio.com",
               storageBucket: ""}),
           firebaseAuthConfig({
               provider: AuthProviders.Google,
               method: AuthMethods.Popup,
               remember: 'default',
               scope: ['email']
           })
          ]);

