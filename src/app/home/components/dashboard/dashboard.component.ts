import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
 
import { Medidas } from '../../models/medidas';
import { MedidasService } from '../../services/medidas.service';

import { Camas } from '../../models/camas';
import { CamasService } from '../../services/camas.service';

import { HighlightService } from '../../services/highlight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	public medidas: Medidas[];
  public camas : Camas[];
  
  
  public notFoundMessage: boolean;
  public highlight_camas;

  // Para datos desde graphql
  public code: string;
  public beds = Number;
  /*
  */
  constructor(
  	private _medidasService: MedidasService,
    private _camasService: CamasService,
    private _highlight: HighlightService,
    private _apollo: Apollo
  ) {}

  ngOnInit(): void {
  /*
  */
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

    // Consultando quuerys con graphql
    this._apollo
    .watchQuery<any>({
      query: gql `
        {
          getCountrys{
            code
            bedsTotal
            bedsAverage
            populationAverage
            estimatedBedsTotal
            estimatedBedsAverage
            restrictions{
             description
             dateStart
            }
          }
        }
      `,
    })
    .valueChanges.subscribe(({data}) => {
      this._camasService.setCamas2(data.getCountrys);
      // console.log(data);
      this.camas = this._camasService.getCamas();
      // console.log(data.getCountrys[0].restrictions[0].description);
      // this._medidasService.setMedidas2(data.getCountrys.restrictions);
      //this.medidas = this._medidasService.getMedidas();
     });
    /*
    */

    this._highlight.getObservable().subscribe(response => {
      this.highlight_camas = response;
    });
  	console.log('Dashboard iniciado');
  }
}
