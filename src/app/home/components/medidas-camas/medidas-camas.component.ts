import { Component, OnInit, Input } from '@angular/core';

import { Medidas } from '../../models/medidas';
import { Camas } from '../../models/camas';

import { HideOverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-medidas-camas',
  templateUrl: './medidas-camas.component.html',
  styleUrls: ['./medidas-camas.component.scss']
})
export class MedidasCamasComponent implements OnInit {

	@Input() medidas: Medidas[];
	@Input() camas: Camas[];

	public showOverlay:boolean = false;


	// public medida = this.medidas[0];
	//public cama = this.camas[0];

  constructor(
    private _hideOverlayService: HideOverlayService
  ) { }

  ngOnInit(): void {
    this._hideOverlayService.getObservable()
    .subscribe(response => {
      console.log(response);
      this.showOverlay = response;
    });
  }

	overlay() {
		if (this.showOverlay) {
			this.showOverlay=false;
	  this._hideOverlayService.enviarData(false);
		} else {
			this.showOverlay=true;
	  this._hideOverlayService.enviarData(true);
		}
	}
}
