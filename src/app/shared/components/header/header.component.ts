import { Component, OnInit } from '@angular/core';
import { format, compareAsc } from 'date-fns'

import { HighlightService } from '../../../home/services/highlight.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HighlightService]
})
export class HeaderComponent implements OnInit {

	titleButton = "Camas";
	// dateControl = "2020-01-01";
	dateControl = format(new Date(), 'yyyy-MM-dd');

	constructor(
    private _highlight: HighlightService
  ) { }

  ngOnInit(): void {
  }

  toggleButton(event) {
  	if (this.titleButton == "Camas") {
	  	this.titleButton = "Medidas";
      this._highlight.enviarData(true);
  	} else {
  		this.titleButton = "Camas";
      this._highlight.enviarData(false);
  	}

  }

}
