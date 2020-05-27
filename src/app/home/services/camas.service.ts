import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Camas } from '../models/camas';
import { CodeCountry }  from '../models/codeCountry';

@Injectable({
	providedIn: 'root'
})
export class CamasService {

	public totalCamas: Camas[];
	public searchCamas = [];
	public set_camas = new BehaviorSubject<boolean>(false);
	public url: string;
	
	constructor() {
		this.totalCamas = [];
	}

	getObservable() {
		return this.set_camas.asObservable();
	}

	setCamas(Pais: string ) {
		// console.log(Pais);
		this.searchCamas = [];
		this.totalCamas
			.filter(country => CodeCountry.transform(country.code).toLowerCase().includes(Pais.toLowerCase()))
			.sort((a, b) => a.code.localeCompare(b.code))
			.map(countryObj => this.searchCamas.push(countryObj));
		if (this.searchCamas.length == 0) {
			// throw new Error("Not found");
			return this.set_camas.next(true);
		}
		return this.set_camas.next(false);
	}

	setCamas2(totalCamas) {
		this.totalCamas = totalCamas;
	}

	getCamas() {
		if (this.searchCamas.length==0) {
			return this.totalCamas;
		}
		// data.getCountrys[0].restrictions[0].description
		console.log(this.searchCamas);
		return this.searchCamas;
	}
}