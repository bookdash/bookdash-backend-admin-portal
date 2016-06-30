import {Component} from '@angular/core';
import {Inject} from '@angular/core';
//import {FirebaseAuth, AuthProviders} from 'angularfire2';
import {AngularFire, AuthProviders} from 'angularfire2';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    selector: 'sd-toolbar',
    templateUrl: 'app/components/toolbar.component.html',
    styleUrls: ['app/components/toolbar.component.css',
                'app/app.component.css'],
    directives: [MdToolbar]
})
export class ToolbarComponent {
    constructor(public angularFire: AngularFire){
        this.angularFire.auth.subscribe(auth =>{
            console.log("auth happened")
        })
    }

    public doLogin():void{
        this.angularFire.auth.login({
            provider: AuthProviders.Google
        });
    }

    public doLogout():void{
        this.angularFire.auth.logout()
    }

}
