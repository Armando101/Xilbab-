import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
 
import { Camas } from '../../models/camas';
import { CamasService } from '../../services/camas.service';

import { Medidas } from '../../models/medidas';
import { MedidasService } from '../../services/medidas.service';

import { HighlightService } from '../../services/highlight.service';
import { CaracteresService } from '../../services/characters.service';

import { CamasGql } from '../../models/camasGql';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	public camas: Camas[];
	public medidas: Medidas[];
  
  public characters: any[];

  public notFoundMessage: boolean;
  public highlight_camas;

  // Para datos desde graphql
  public code: string;
  public beds = Number;
  /*
  */
  constructor(
  	private _camasService: CamasService,
  	private _medidasService: MedidasService,
    private _highlight: HighlightService,
    // private _caracteresService: CaracteresService,
    private _apollo: Apollo
  ) {
  	this.camas = _camasService.getCamas();
  	this.medidas = _medidasService.getMedidas();
  }

  ngOnInit(): void {
    // Servicios de camas y medidas para datos quemados
    this._camasService.getObservable().subscribe(response => {
      this.notFoundMessage = response;
      this.camas = this._camasService.getCamas();
    });

    this._medidasService.getObservable().subscribe(response => {
      this.medidas = this._medidasService.getMedidas();
    });
    

    /*
    // Servicios de prueba para peticiones con http client
    this._caracteresService.getObservable()
    .subscribe(
      response => {
        console.log('Character: ', response.results);
        this.characters = response.results;
      },
      error => {
        console.error(error);
      }
     );
    /*
    */

    /*
    // Consultando quuerys con graphql
    this._apollo
    .watchQuery({
      query: gql `
        {
          getCountrys{
            code
            bedsTotal 
          }
        }
      `,
    })
    .valueChanges.subscribe(response => {
      this.characters = response.data.getCountrys;
      console.log(response.data);
      // console.log(response)
     });
    */

    this._highlight.getObservable().subscribe(response => {
      this.highlight_camas = response;
    });
  	console.log('Dashboard iniciado');
  }
}
