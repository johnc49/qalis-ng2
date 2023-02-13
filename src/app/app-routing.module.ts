import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/components/about/about.module').then(
        (m) => m.AboutModule
      ),
  },
  {
    path: 'loan',
    loadChildren: () =>
      import('./modules/components/loan/loan.module').then((m) => m.LoanModule),
  },
  {
    path: 'community',
    loadChildren: () =>
      import('./modules/components/community/community.module').then(
        (m) => m.CommunityModule
      ),
  },
  {
    path: 'story',
    loadChildren: () =>
      import('./modules/components/story/story.module').then(
        (m) => m.StoryModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/components/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./modules/components/signup/signup.module').then(
        (m) => m.SignupModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/components/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
