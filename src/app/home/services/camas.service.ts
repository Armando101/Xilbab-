import { Injectable } from '@angular/core';
import { Camas } from '../models/camas';


@Injectable()
export class CamasService {

	public camas: Camas[];

	constructor() {
		this.camas = [
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
		];
	}

	getCamas() {
		console.log(this.camas);
		return this.camas;
	}
}