import { AuthService } from './services/auth.service';
import { FirebaseService } from './services/firebase.service';
import { AuthMethods, AuthProviders } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

import firebaseConfig from './config/firebase.settings';
import { BusinessComponent } from './business/business.component';
import { NewBusinessComponent } from './business/new-business/new-business.component';
import { ListBusinessComponent } from './business/list-business/list-business.component';
import { NavComponent } from './nav/nav.component';
import { ShowBusinessComponent } from './business/show-business/show-business.component';
import { EditBusinessComponent } from './business/edit-business/edit-business.component';


@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    NewBusinessComponent,
    ListBusinessComponent,
    NavComponent,
    ShowBusinessComponent,
    EditBusinessComponent
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
  providers: [FirebaseService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
