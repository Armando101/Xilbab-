import { Injectable } from '@angular/core';
import { Camas } from '../models/camas';
import { Subject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class CamasService {

	public totalCamas: Camas[];
	public searchCamas = [];
	public set_camas = new Subject<any>();
	
	// Variable auxiliar que permitirá que los componentes se subscriban
	enviarDataObservable = this.set_camas.asObservable();

	constructor() {
		this.totalCamas = [
			/* new Camas("MX", 100),
			new Camas("CO", 200),
			new Camas("AG", 250),
			new Camas("UR", 150),
			new Camas("GB", 100),
			new Camas("AR", 200),
			new Camas("DE", 250),
			new Camas("ES", 150),
			new Camas("SP", 100),
			new Camas("PL", 200),
			new Camas("GH", 250),
			new Camas("BN", 150),*/

			new Camas("México", 100),
			new Camas("Colombia", 200),
			new Camas("Argentina", 250),
			new Camas("Uruguay", 150),
			new Camas("Panamá", 100),
			new Camas("Nicaragua", 200),
			new Camas("Brasil", 250),
			new Camas("España", 150),
			new Camas("Honduras", 100),
			new Camas("Guatemala", 200),
			new Camas("Chile", 250),
			new Camas("Venezuela", 150),
			new Camas("Belice", 250),
			new Camas("Cuba", 150),
			new Camas("Ecuador", 100),
			new Camas("Perú", 250),
			new Camas("Estados Unidos", 100),
			new Camas("Francia", 200),
			new Camas("Italia", 250),
			new Camas("Rusia", 150),
			new Camas("Japón", 100),
			new Camas("China", 200),
			new Camas("Corea", 200),
			new Camas("Serbia", 150),
		];

	}

	setCamas(Pais) {
		// console.log(Pais);
		// console.log(this.totalCamas[0]);
		this.searchCamas = [];
		this.totalCamas
			.filter(country => country.code_country.toLowerCase().includes(Pais.toLowerCase()))
			.map(countryObj => this.searchCamas.push(countryObj));
	
		// console.log(this.searchCamas);
		this.set_camas.next(Pais);
	}

	getCamas() {
		if (this.searchCamas.length==0) {
			return this.totalCamas;
		}
		return this.searchCamas;
	}
}