import { Component, OnInit } from '@angular/core';

import { Camas } from '../../models/camas';
import { CamasService } from '../../services/camas.service';

import { Medidas } from '../../models/medidas';
import { MedidasService } from '../../services/medidas.service';

import { HighlightService } from '../../services/highlight.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	public camas: Camas[];
	public medidas: Medidas[];
  
  public notFoundMessage: boolean;
  public highlight_camas;

  constructor(
  	private _camasService: CamasService,
  	private _medidasService: MedidasService,
    private _highlight: HighlightService
  ) {
  	this.camas = _camasService.getCamas();
  	this.medidas = _medidasService.getMedidas();
  }

  ngOnInit(): void {
    this._camasService.getObservable().subscribe(response => {
      this.notFoundMessage = response;
      this.camas = this._camasService.getCamas();
    });

    this._medidasService.getObservable().subscribe(response => {
      this.medidas = this._medidasService.getMedidas();
    });
     
    this._highlight.getObservable().subscribe(response => {
      this.highlight_camas = response;
    });

  	console.log('Dashboard iniciado');
  }
}
