import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class CaracteresService {

	public set_camas = new BehaviorSubject<boolean>(false);
	public url: string;
	
	constructor(
		private _http: HttpClient
	) {
		this.url = 'https://rickandmortyapi.com/api/'
	}

	getObservable():Observable<any> {
		return this._http.get(this.url + 'character');
	}

/*
	setCamas(Pais: string ) {
		if (this.searchCamas.length == 0) {
			// throw new Error("Not found");
			return this.set_camas.next(true);
		}
		return this.set_camas.next(false);
	}

	getCamas() {
			if (this.searchCamas.length==0) {
			return this.totalCamas;
		}
		return this.searchCamas;
	}
*/
}