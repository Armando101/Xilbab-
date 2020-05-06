import { Component, OnInit, Input } from '@angular/core';

import { Medidas } from '../../models/medidas';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.scss']
})
export class MedidasComponent implements OnInit {

	@Input() medidas: Medidas[];

  constructor() { }

  ngOnInit(): void {
  }

}
