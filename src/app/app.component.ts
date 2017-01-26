import { Category } from './services/category';
import { Business } from './services/business';
import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { AuthProviders } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  items: any;
  user = {};
  businesses: Business[];
  categories: Category[];
  appState: string;
  currentKey: string;


  constructor(private af: AngularFire, private fbService: FirebaseService, private authService: AuthService) { }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user;
      }
      else {
        // user not logged in
        this.user = {};
      }
    });
    this.fbService.getBusinesses().subscribe(b => {
      this.businesses = b;
    });
    this.fbService.getBusinesses().subscribe(c => {
      this.categories = c;
    });
  }

  login() {
    this.authService.login();

  }

  logout() {
    this.authService.logout();
  }

  changeState(state: string, key: string) {
    if (key)
    {
      this.currentKey = key;
    }
    this.appState = state;
  }

}