import { Injectable } from '@angular/core';
import { Team } from '../models/user/team';

@Injectable({
	providedIn: 'root'
})
export class CamasService {

	public coach: Team;
	public backend: Team;
	public data: Team;
	public frontendT1: Team[];
	public frontendT2: Team[];
	public frontendT3: Team;

	constructor() {
		this.coach = new Team('Joshua P. Cruz', 'Expepriencia en desarrollo web 🖥️, Devops ⚙️, chatbots 🤖, SCRUM 📊.Apasionado por la enseñanza y conocer nuevas cosas', []);

		this.backend = new Team('', '', []);
		this.data = new Team('Juan C. Alvarez', 'Ingeniero en Sistemas y Computación. Intereses: programación, videojuegos, ciencias naturales y exactas, tecnología, fantasía/ciencia ficción, gastronomía y arte.', []);
		this.frontendT1 = [new Team('', '', []), new Team('', '', []), new Team('', '', []),];
		this.frontendT2 = [new Team('', '', []), new Team('', '', []), new Team('', '', []),];
		this.frontendT3 = new Team('', '', []);
	}


	getCamas() {
	}
}