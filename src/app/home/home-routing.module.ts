import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const route: Routes = [{
    path: '',
    component: DashboardComponent
}];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [
        RouterModule
    ]
})


export class HomeRoutingModule {

}