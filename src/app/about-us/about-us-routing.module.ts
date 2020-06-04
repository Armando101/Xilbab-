import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';

const route: Routes = [{
    path: '',
    component: AboutComponent
}];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [
        RouterModule
    ]
})


export class AboutUsRoutingModule {

}