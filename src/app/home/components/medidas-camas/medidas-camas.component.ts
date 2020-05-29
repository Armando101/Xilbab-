import { Component, OnInit, Input } from '@angular/core';

import { Medidas } from '../../models/medidas';
import { Camas } from '../../models/camas';

@Component({
  selector: 'app-medidas-camas',
  templateUrl: './medidas-camas.component.html',
  styleUrls: ['./medidas-camas.component.scss']
})
export class MedidasCamasComponent implements OnInit {

	@Input() camas: Camas[];

  constructor() { }

  ngOnInit(): void {}
	
}
