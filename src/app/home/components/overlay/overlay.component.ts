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
  public showMore: boolean = false;

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

  hide() {
  	this._hideOverlayService.enviarData({"country": this.information.code, "status": false});
  }

  more() {
    if (this.showMore) {
      this.showMore = false;
    } else {
      this.showMore = true;
    }
  }

}
