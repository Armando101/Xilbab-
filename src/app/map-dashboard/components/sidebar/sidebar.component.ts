import { Component, OnInit } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	public code: string;
	public populationAverage: number;
	public bedsTotal: number;
	public bedsAverage: number;
	public estimatedBedsTotal: number;
	public estimatedBedsAverage: number;
  public medidas: any[];

  constructor(
  	private _informationService: InformationService
  ) { 
  	this._informationService.getObservable().subscribe(response => {
  		this.code = response.code;
  		this.populationAverage= response.populationAverage;
			this.bedsTotal= response.bedsTotal;
			this.bedsAverage= response.bedsAverage;
			this.estimatedBedsTotal= response.estimatedBedsTotal;
			this.estimatedBedsAverage= response.estimatedBedsAverage;
      this.medidas = response.restrictions;
      // console.log(this.medidas);
  		console.log('Desde el sidebar: ', response);
  	});
  }

  ngOnInit(): void {
  }

}
