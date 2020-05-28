import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ObjectOverlay } from '../models/objectOverlay';

@Injectable({
	providedIn: 'root'
})
export class HideOverlayService {



	public hideOverlayService$ = new BehaviorSubject<ObjectOverlay>({country: 'ad', status: false});
	
	getObservable() {
		return this.hideOverlayService$.asObservable();
	}

	enviarData(data: ObjectOverlay) {
		this.hideOverlayService$.next(data);
	}

}