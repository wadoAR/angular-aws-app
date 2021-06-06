import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home/home.component';
import {AboutComponent} from './static/about/about.component';
import {TermsAndConditionsComponent} from './static/terms-and-conditions/terms-and-conditions.component';
import {SupportComponent} from './static/support/support.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'terms-and-conditions', component: TermsAndConditionsComponent},
  {path: 'support', component: SupportComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
