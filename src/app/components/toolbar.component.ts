import {Component} from 'angular2/core';
import {Inject} from 'angular2/core';
import {FirebaseAuth, AuthProviders} from 'angularfire2';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    selector: 'sd-toolbar',
    templateUrl: 'app/components/toolbar.component.html',
    styleUrls: ['app/components/toolbar.component.css',
                'app/book-dash-admin.css'],
    directives: [MdToolbar]
})
export class ToolbarComponent {
    constructor(@Inject(FirebaseAuth) public auth: FirebaseAuth){
    }

    public doLogin():void{
        console.log(this);
        this.auth.login({
            provider: AuthProviders.Google
        })
            .then((response) => console.log(response));
    }

    public doLogout():void{
        this.auth.logout()
    }

}
