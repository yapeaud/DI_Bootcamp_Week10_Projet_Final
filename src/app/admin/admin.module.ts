import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { SamuComponent } from './samu/samu.component';
import { DgpnComponent } from './dgpn/dgpn.component';
import { GspmComponent } from './gspm/gspm.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    FooterComponent,
    SamuComponent,
    DgpnComponent,
    GspmComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
