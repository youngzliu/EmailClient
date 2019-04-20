import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from "./app.routing";
import { AllEmailsComponent } from './all-emails/all-emails.component';
import { FormsModule } from "@angular/forms";
import { EmailDetailComponent } from './email-detail/email-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AllEmailsComponent,
    EmailDetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
