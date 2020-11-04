import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { TermsComponent } from './portal/terms/terms.component';

const routes: Routes = [
  { path: '',  redirectTo: '/', pathMatch: 'full'},
  { path: 'register',  component: RegisterComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'terms-and-conditions',  component: TermsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
