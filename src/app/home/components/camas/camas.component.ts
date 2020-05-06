import { Component, OnInit, Input } from '@angular/core';
import { Camas } from '../../models/camas';

@Component({
  selector: 'app-camas',
  templateUrl: './camas.component.html',
  styleUrls: ['./camas.component.scss']
})
export class CamasComponent implements OnInit {

	@Input() camas: Camas[];

	public highlight_camas;
	public highlight_medidas;

  constructor() { }

  ngOnInit(): void {
  }

}
