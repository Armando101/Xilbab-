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
    this._camasService.enviarDataObservable.subscribe(response => {
      console.log('Servicio desde el dashbord')
      this.camas = this._camasService.getCamas();
    });
    this._medidasService.enviarDataObservable.subscribe(response => {
      console.log('Servicio desde el dashbord')
      this.medidas = this._medidasService.getMedidas();
    });
  	console.log('Dashboard iniciado');
  }

  busquedaPaises(Pais) {
    this._camasService.setCamas(Pais);
    this._medidasService.setMedidas(Pais);
  }
}
