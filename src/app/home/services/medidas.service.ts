import { Injectable } from '@angular/core';
import { Medidas } from '../models/medidas';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class MedidasService {

	public totalMedidas: Medidas[];
	public searchMedidas = [];

	public set_medidas$ = new BehaviorSubject<boolean>(false);

	constructor() {
		this.totalMedidas = [];
	}

	getObservable() {
		return this.set_medidas$.asObservable();
	}

	setMedidas2(totalMedidas) {
		this.totalMedidas = totalMedidas
	}

	setMedidas(Pais) {
		this.searchMedidas = [];
		this.totalMedidas
			.filter(country => country.code_country.toLowerCase().includes(Pais.toLowerCase()))
			.sort((a, b) => a.code_country.localeCompare(b.code_country))
			.map(countryObj => this.searchMedidas.push(countryObj));
	
		this.set_medidas$.next(Pais);
	}

	getMedidas() {
		if (this.searchMedidas.length==0) {
			return this.totalMedidas;
		}
		return this.searchMedidas;
	}
}