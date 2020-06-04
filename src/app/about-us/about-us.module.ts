import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from './about-us-routing.module';

import { AboutComponent } from './components/about/about.component';
import { BioComponent } from './components/bio/bio.component';


@NgModule({
  declarations: [AboutComponent, BioComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutUsModule { }
