import { listeners } from 'cluster';
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
  selectedBusiness: Business;
  newBusiness: Business;



  constructor(private af: AngularFire, private fbService: FirebaseService, private authService: AuthService) {
    this.appState = 'default';
  }

  ngOnInit() {
    this.af.auth.subscribe(user => {
      if (user) {
        // user logged in
        this.user = user;
      } else {
        // user not logged in
        this.user = {};
      }
    });
    this.fbService.getBusinesses().subscribe(b => {
      this.businesses = b;
    });
    this.fbService.getCategories().subscribe(c => {
      this.categories = c;
    });

  }

  login() {
    this.authService.login();

  }

  logout() {
    this.authService.logout();
  }

  changeState(state: string, key?: string) {
    if (key) {
      this.selectedBusiness = this.businesses.find(bs => bs.$key === key);
    }
    this.appState = state;
    if (state === 'add') {
      this.newBusiness = { category: null } as Business;
    }
  }




  filterCategory(category: string) {
    console.log(`filter on ${category}`);
    this.fbService.getBusinesses(category).subscribe(b => {
      this.businesses = b;
    });
  }



  onBusinessCreated(business: Business) {
    this.fbService.addBusiness(business);
    this.changeState('default');
  }
  updateBusiness(businessUpdated: Business) {
    this.fbService.updateBusiness(businessUpdated.$key as string, businessUpdated);
  }
  onDeleteBusiness(key: string) {
    this.fbService.deleteBusiness(key);
  }



}