import { Component, OnInit } from '@angular/core';
import { format, compareAsc } from 'date-fns'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	titleButton = "Camas";
	// dateControl = "2020-01-01";
	dateControl = format(new Date(), 'yyyy-MM-dd');

	constructor() { }

  ngOnInit(): void {
  }

  toggleButton() {
  	if (this.titleButton == "Camas") {
	  	this.titleButton = "Medidas";
  	} else {
  		this.titleButton = "Camas";
  	}
  }

}
