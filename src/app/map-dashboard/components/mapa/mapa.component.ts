import { Component, OnInit } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { StylesService } from './MapsStyles/Styles';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  public show: boolean = false;
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

  public options = {
  	zoom:3,
  	styles: this._stylesService.getBlueStyle()
  }

  constructor(
  	private _apollo: Apollo,
    private _stylesService: StylesService
  ) { 
  }

  ngOnInit(): void {
  	this._apollo
    .watchQuery<any>({
      query: gql `
        {
          getCountrys{
            code
				    lat
				    lng
				    bedsTotal
				    bedsAverage
				    populationAverage
				    estimatedBedsTotal
				    estimatedBedsAverage
            restrictions{
             description
            }
          }
        }
      `,
    })
    .valueChanges.subscribe(({data}) => {
    	this.markerPositions = data.getCountrys;
    	// console.log(this.markerPositions);
  	});
  }

  showMap() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
    console.log(this.show);
  }

}
