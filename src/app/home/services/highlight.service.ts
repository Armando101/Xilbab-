import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HighlightService {

	public highlight_camas$ = new BehaviorSubject<boolean>(false);
	
	getObservable() {
		return this.highlight_camas$.asObservable();
	}

	enviarData(data: boolean) {
		this.highlight_camas$.next(data);
	}

}