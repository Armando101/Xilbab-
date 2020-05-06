import { Component, OnInit, Input } from '@angular/core';
import { Camas } from '../../models/camas';

@Component({
  selector: 'app-camas',
  templateUrl: './camas.component.html',
  styleUrls: ['./camas.component.scss']
})
export class CamasComponent implements OnInit {

	@Input() camas: Camas[];

  constructor() { }

  ngOnInit(): void {
  }

}
