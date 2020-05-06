import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class HighlightService {

	public data = false;
	public highlight_camas = new Subject<boolean>();
	
	// Variable auxiliar que permitirá que los componentes se subscriban
	enviarDataObservable = this.highlight_camas.asObservable();

	enviarData(data: boolean) {
		this.data = data;
		this.highlight_camas.next(data);
	}

}