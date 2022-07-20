import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [];
const routes: Routes = [
  { path: '', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
