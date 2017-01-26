import { Category } from './category';
import { Business } from './business';
import {AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFire) {


   }

   getBusinesses(){
     this.businesses = this.af.database.list('/businesses') as FirebaseListObservable<Business[]>;
     return this.businesses;
   }
   getCategories(){
     this.categories = this.af.database.list('/categories') as FirebaseListObservable<Category[]>;
     return this.categories;
   }


}
