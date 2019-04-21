import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from "./app.routing";
import { AllEmailsComponent } from './all-emails/all-emails.component';
import { FormsModule } from "@angular/forms";
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NavbarComponent } from './navbar/navbar.component';
import { TrashComponent } from './trash/trash.component';
import { StarredComponent } from './starred/starred.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  projectId: masterFirebaseConfig.projectId,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AllEmailsComponent,
    EmailDetailComponent,
    NavbarComponent,
    TrashComponent,
    StarredComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
