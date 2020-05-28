import { Component, OnInit, Input } from '@angular/core';
import { HideOverlayService } from '../../services/overlay.service';
import { Camas } from '../../models/camas';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {

	@Input() information;

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
    console.log(this.information);
  }

  hide() {
  	this._hideOverlayService.enviarData(false);
  }

}
