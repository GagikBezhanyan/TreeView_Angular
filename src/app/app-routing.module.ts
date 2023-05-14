import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//   { path: 'home', loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent) },
//   { path: '', pathMatch: 'full', redirectTo: 'home' },
//   { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }