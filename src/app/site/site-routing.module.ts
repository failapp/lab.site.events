import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './pages/landing/landing.component';
import { TermsComponent } from './pages/terms/terms.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'terms', component: TermsComponent }
  //{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
