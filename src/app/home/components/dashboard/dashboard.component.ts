import { Component, OnInit } from '@angular/core';

import { Camas } from '../../models/camas';
import { CamasService } from '../../services/camas.service';

import { Medidas } from '../../models/medidas';
import { MedidasService } from '../../services/medidas.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [CamasService, MedidasService]
})
export class DashboardComponent implements OnInit {

	public camas: Camas[];
	public medidas: Medidas[];

  constructor(
  	private _camasService: CamasService,
  	private _medidasService: MedidasService
  ) {
  	this.camas = _camasService.getCamas();
  	this.medidas = _medidasService.getMedidas();
  }

  ngOnInit(): void {
  	console.log('Dashboard iniciado');
  }

}
