import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
	providedIn: 'root'
})
export class InformationService {

	public set_information$ = new BehaviorSubject<any>({});

	constructor() {}

	getObservable() {
		return this.set_information$.asObservable();
	}

	enviarData(marker: any) {
		this.set_information$.next(marker);
	}
}