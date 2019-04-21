import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component'
import { AllEmailsComponent } from './all-emails/all-emails.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { TrashComponent } from './trash/trash.component';
import { StarredComponent } from './starred/starred.component';

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
  },
  {
    path: "trash",
    component: TrashComponent
  },
  {
    path: "starred",
    component: StarredComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
