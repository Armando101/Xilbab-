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
  providers: [CamasService, MedidasService, HighlightService]
})
export class DashboardComponent implements OnInit {

	public camas: Camas[];
	public medidas: Medidas[];
   
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
    this._highlight.enviarDataObservable.subscribe(response => {
      this.highlight_camas = response;
      console.log(this._highlight.data);
    });
  	console.log('Dashboard iniciado');
  }

}
