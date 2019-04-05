import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { routing } from "./app.routing";
import { AllEmailsComponent } from './all-emails/all-emails.component';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AllEmailsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
