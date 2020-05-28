import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HideOverlayService {

	public hideOverlayService$ = new BehaviorSubject<boolean>(false);
	
	getObservable() {
		return this.hideOverlayService$.asObservable();
	}

	enviarData(data: boolean) {
		this.hideOverlayService$.next(data);
	}

}