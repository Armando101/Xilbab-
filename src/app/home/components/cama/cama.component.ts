import { Component, OnInit, Input } from '@angular/core';
import { HideOverlayService } from '../../services/overlay.service';

@Component({
  selector: 'app-cama',
  templateUrl: './cama.component.html',
  styleUrls: ['./cama.component.scss']
})
export class CamaComponent implements OnInit {

	@Input() information;

	public showOverlay:boolean = false;

  constructor(
  	private _hideOverlayService: HideOverlayService
  ) { }

  ngOnInit(): void {
    this._hideOverlayService.getObservable()
    .subscribe(response => {
      if (response.country == this.information.code) {
        // console.log(this.information);
        this.showOverlay = response.status;
      }
    });
  }

  overlay() {
  	if (this.showOverlay) {	
  		this.showOverlay = false;
  		this._hideOverlayService.enviarData({"country": this.information.code, "status": false});
  	} else {
  		this.showOverlay = true;
  		this._hideOverlayService.enviarData({"country": this.information.code, "status": true});
  	}
  }

}
