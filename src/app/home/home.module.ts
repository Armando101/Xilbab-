import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CamasComponent } from './components/camas/camas.component';
import { MedidasComponent } from './components/medidas/medidas.component';
import { MedidasCamasComponent } from './components/medidas-camas/medidas-camas.component';

@NgModule({
  declarations: [DashboardComponent, CamasComponent, MedidasComponent, MedidasCamasComponent],
  imports: [
    CommonModule, HomeRoutingModule, SharedModule
  ],
  exports: [DashboardComponent]
})
export class HomeModule { }
