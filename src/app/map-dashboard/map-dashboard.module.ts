import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './components/mapa/mapa.component';
import { DashboardMapRoutingModule } from './map-dashboard-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { MarcadorComponent } from './components/marcador/marcador.component';
import { CodeCountryPipe } from './pipe/code-country.pipe';

@NgModule({
  declarations: [MapaComponent, MarcadorComponent, CodeCountryPipe],
  imports: [
    CommonModule,
    DashboardMapRoutingModule,
    GoogleMapsModule
    ],
  exports: [MapaComponent]
})
export class MapDashboardModule { }
