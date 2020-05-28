import { Component, OnInit, Input } from '@angular/core';
import { Camas } from '../../models/camas';
import { HideOverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-camas',
  templateUrl: './camas.component.html',
  styleUrls: ['./camas.component.scss']
})
export class CamasComponent implements OnInit {

	@Input() camas: Camas[];
	@Input() characters: any[];

	public showOverlay:boolean = false;

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
