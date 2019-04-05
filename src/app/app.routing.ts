import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component'
import { AllEmailsComponent } from './all-emails/all-emails.component';

const appRoutes: Routes = [
  {
    path: "",
    component: SplashComponent
  },
  {
    path: "emails",
    component: AllEmailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
