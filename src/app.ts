import {bootstrap} from 'angular2/platform/browser';
import {BookDashAdminApp} from './app/book-dash-admin';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire,
        firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';


bootstrap(BookDashAdminApp, [
    FIREBASE_PROVIDERS,
    defaultFirebase('https://book-dash.firebaseio.com'),
    firebaseAuthConfig({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup,
        remember: 'default',
        scope: ['email']
    }),
    ROUTER_PROVIDERS
]);
