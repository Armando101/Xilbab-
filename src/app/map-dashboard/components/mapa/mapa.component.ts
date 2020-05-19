import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

	public title = 'My first map';
	public zoom = 3;
	public center = {lat: 24, lng: 12};
  markerOptions = {draggable: false};
  display?: google.maps.LatLngLiteral;

  public markerPositions: google.maps.LatLngLiteral[] = [];
  public position = {
  	lat: 0,
  	lng: 0
  }
  constructor(
  	private _apollo: Apollo
  ) { 
  }

  ngOnInit(): void {
  	this._apollo
    .watchQuery<any>({
      query: gql `
        {
          getCountrys{
            lat
            lng
            bedsTotal
            code
            populationAverage
          }
        }
      `,
    })
    .valueChanges.subscribe(({data}) => {
    	this.markerPositions = data.getCountrys;
    	console.log(this.markerPositions);
  	});
  }


}
