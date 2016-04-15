import {Component, Input, Inject} from 'angular2/core';
import {MdButton} from '@angular2-material/button';
import {FirebaseRef} from 'angularfire2';
declare var CONTRIBUTORS: any;

@Component({
  selector: '[contributor]',
  templateUrl: 'app/contributors/edit/edit.html',
  styleUrls: ['app/contributors/edit/edit.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Edit {
    edit: boolean = false;
    @Input() contributor: any; 

    constructor(@Inject(FirebaseRef) public firebase:Firebase) {
    }

    doEdit(){
        /*this.firebase.child(CONTRIBUTORS)
            .child(this.key)
            .once("value",
                  (contributor) => {
                      this.contributor = contributor.val();
                      this.edit = true;
                  }
                 );
        */
        this.edit = true
    }

    doSave(){
        var key: string = this.contributor.$key
        delete this.contributor.$key
        this.firebase.child(CONTRIBUTORS).child(key).set(
            this.contributor
            );
        this.edit = false;
    }

}
