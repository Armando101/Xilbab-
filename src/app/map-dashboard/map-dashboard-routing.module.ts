import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MapaComponent } from './components/mapa/mapa.component';

const route: Routes = [{
    path: '',
    component: MapaComponent
}];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [
        RouterModule
    ]
})


export class DashboardMapRoutingModule {

}