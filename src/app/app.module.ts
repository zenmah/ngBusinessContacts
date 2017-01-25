import { AuthMethods, AuthProviders } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import firebaseConfig from './config/firebase.settings';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, {
        method: AuthMethods.Popup,
        provider: AuthProviders.Google
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
