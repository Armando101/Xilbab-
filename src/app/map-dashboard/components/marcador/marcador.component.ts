import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss']
})
export class MarcadorComponent implements OnInit {
	@ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

	@Input() markerPositions: any;

  public markerOptions = {
    icon: {
      url: "../../../../assets/skull.png",
      scaledSize: new google.maps.Size(25, 25)
    }
  }

  constructor(
  	private _informationService: InformationService
  ) { }

  ngOnInit(): void {

  }

  openInfoWindow(marker: MapMarker) {
  	this.infoWindow.open(marker);
  	this._informationService.enviarData(this.markerPositions);
  	// console.log(this.markerPositions)
  }

}
