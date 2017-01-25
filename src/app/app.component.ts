import { AuthProviders } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  items: any;
  user = {};
  constructor(private af: AngularFire) {

    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        console.log('user is logged in');
        this.user = user;
        this.items = this.af.database.list('/items');
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
    
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
  }
  
  logout() {
    this.af.auth.logout();
  }

}
