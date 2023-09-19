import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:'login',
   component: SigninComponent
  },
  {
    path:'forgot-password',
    component: ResetPasswordComponent
  },
  {
    path:'register',
    component: SignupComponent
  },
  {
    path:'dashboard', 
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'register',
    pathMatch:'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
