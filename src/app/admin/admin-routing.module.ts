import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DgpnComponent } from './dgpn/dgpn.component';
import { GspmComponent } from './gspm/gspm.component';
import { SamuComponent } from './samu/samu.component';

const routes: Routes = [

  {
    path: '', component: AlayoutComponent, children: [
      { path: '', redirectTo: 'dashboard/samu', pathMatch: 'full'},
      
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/samu', component: SamuComponent },
      { path: 'dashboard/dgpn', component: DgpnComponent },
      { path: 'dashboard/gspm', component: GspmComponent },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
