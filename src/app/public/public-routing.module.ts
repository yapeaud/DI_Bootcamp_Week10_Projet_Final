import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AlerteComponent } from './alerte/alerte.component';
import { AproposComponent } from './apropos/apropos.component';
import { PlayoutComponent } from './playout/playout.component';






const routes: Routes = [
  {
    path: '', component: PlayoutComponent, children: [
      { path:'', redirectTo: 'accueil', pathMatch: 'full'},

      { path: 'accueil', component: AccueilComponent },
      { path: 'apropos', component:  AproposComponent },
      { path: 'alerte', component: AlerteComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
