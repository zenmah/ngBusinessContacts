import { AngularFire, AuthProviders } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  user: {};
  constructor(private af: AngularFire) {
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
  }

  login() {
    return this.af.auth.login({
      provider: AuthProviders.Google
    });
  }

  logout() {
    return this.af.auth.logout();
  }

  getUser() {
    return this.user;
  }

  isLoggedIn(): Boolean {
    return this.user === {};
  }





}
