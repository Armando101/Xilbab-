import { Component, OnInit, Input } from '@angular/core';

import { Medidas } from '../../models/medidas';
import { Camas } from '../../models/camas';

@Component({
  selector: 'app-medidas-camas',
  templateUrl: './medidas-camas.component.html',
  styleUrls: ['./medidas-camas.component.scss']
})
export class MedidasCamasComponent implements OnInit {

	@Input() medidas: Medidas[];
	@Input() camas: Camas[];

	// public medida = this.medidas[0];
	//public cama = this.camas[0];

  constructor() { }

  ngOnInit(): void {
  }

}
