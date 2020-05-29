import { Component, OnInit, Input } from '@angular/core';
import { HideOverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-medida-cama',
  templateUrl: './medida-cama.component.html',
  styleUrls: ['./medida-cama.component.scss']
})
export class MedidaCamaComponent implements OnInit {

	@Input() information;

  public showOverlay:boolean = false;


  constructor(
    private _hideOverlayService: HideOverlayService
  ) { }

  ngOnInit(): void {
    this._hideOverlayService.getObservable()
    .subscribe(response => {
      //console.log(response);
      this.showOverlay = response.status;
    });
  }

	overlay() {
		if (this.showOverlay) {
		  this._hideOverlayService.enviarData({"country": this.information.code, "status": false});
		} else {
			this._hideOverlayService.enviarData({"country": this.information.code, "status": true});
		}
	}

}
