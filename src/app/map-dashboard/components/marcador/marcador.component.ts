import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'app-marcador',
  templateUrl: './marcador.component.html',
  styleUrls: ['./marcador.component.scss']
})
export class MarcadorComponent implements OnInit {
	@ViewChild(MapInfoWindow, {static: false}) infoWindow: MapInfoWindow;

	@Input() markerPositions: any;

  constructor(
  	
  ) { }

  ngOnInit(): void {

  }

  openInfoWindow(marker: MapMarker) {
  	this.infoWindow.open(marker);
  }

}
