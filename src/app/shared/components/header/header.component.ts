import { Component, OnInit } from '@angular/core';
import { format, compareAsc } from 'date-fns'
import { FormControl } from '@angular/forms';
import { debounceTime, map, filter } from 'rxjs/operators';

import { HighlightService } from '../../../home/services/highlight.service';
import { CamasService } from '../../../home/services/camas.service';
import { MedidasService } from '../../../home/services/medidas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	titleButton = "Camas";
	// dateControl = "2020-01-01";
	dateControl = format(new Date(), 'yyyy-MM-dd');
  searchControl = new FormControl('');
  
	constructor(
    private _highlight: HighlightService,
    private _camasService: CamasService,
    private _medidasService: MedidasService,
  ) {
      this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        /*
        filter((value: string) => {
          return value.length >= 3;
        }),
        map((value: string) => {
          return value.toLowerCase();
        })
        */
      )
      .subscribe(Pais => {   
          this._camasService.setCamas(Pais);
          this._medidasService.setMedidas(Pais);
       });
  }

  ngOnInit(): void {}

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
