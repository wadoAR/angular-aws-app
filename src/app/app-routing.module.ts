import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {AboutComponent} from './static/about/about.component';
import {TermsAndConditionsComponent} from './static/terms-and-conditions/terms-and-conditions.component';
import {SupportComponent} from './static/support/support.component';
import {LoginComponent} from './authentication/login/login.component';
import {AuthGuard} from './utils/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent, canActivate: [AuthGuard]},
  {path: 'support', component: SupportComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
