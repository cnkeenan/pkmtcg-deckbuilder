import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TcgComponent } from './tcg/tcg.component';


const routes: Routes = [
  {
    path: 'cardlookup', component: TcgComponent
  },
  {
    path: '',
    redirectTo: '/cardlookup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
