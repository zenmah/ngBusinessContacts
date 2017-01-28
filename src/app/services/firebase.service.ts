import { Category } from './category';
import { Business } from './business';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Category[]>;

  constructor(private af: AngularFire) {


  }

  getBusinesses(category?: string) {
    if (category) {
      console.log(`filtering the bussinesses of the ${category}`);
      this.businesses = this.af.database.list('/businesses', {
        query: {
          orderByChild: 'category',
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>;
    } else {
      this.businesses = this.af.database.list('/businesses') as FirebaseListObservable<Business[]>;
    }
    return this.businesses;
  }

  getCategories() {
    this.categories = this.af.database.list('/categories') as FirebaseListObservable<Category[]>;
    return this.categories;
  }

  addBusiness(business: Business) {
    return (this.businesses.push(business));
  }
  deleteBusiness(businessKey: string) {
    return this.businesses.remove(businessKey);
  }

  updateBusiness(businessKey: string, updatedBusiness: any) {
    // tslint:disable-next-line:prefer-const
     const updObje = Object.assign({}, updatedBusiness);
     delete updObje.$exists;
     delete updObje.$key;
     return this.businesses.update(businessKey, updObje);
  }

}
