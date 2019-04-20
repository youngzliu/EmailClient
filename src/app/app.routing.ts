import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component'
import { AllEmailsComponent } from './all-emails/all-emails.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';

const appRoutes: Routes = [
  {
    path: "",
    component: SplashComponent
  },
  {
    path: "emails",
    component: AllEmailsComponent
  },
  {
    path: "emails/:id",
    component: EmailDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
