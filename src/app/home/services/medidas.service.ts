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
		this.totalMedidas = [

			new Medidas("México", 'government announced that all universities will close their classes at the latest by 16 March.'),
			new Medidas("Colombia", 'All schools, nurseries and colleges closed.'),
			new Medidas("Argentina", 'If one person in any household has a persistent cough or fever, everyone living there must stay at home for 14 days'),
			new Medidas("Uruguay", 'By the weekend, those with the most serious health conditions must be "largely shielded from social contact for around 12 weeks"	'),
			new Medidas("Panamá", 'Everyone should avoid gatherings with friends and family, as well as large gatherings and crowded places, such as pubs, clubs and theatres'),
			new Medidas("Nicaragua", 'People who are self-isolating with mild symptoms are no longer being tested for the virus.'),
			new Medidas("Brasil", 'Two tourists from Wuhan presenting with fevers were quarantined at the airport in Danang '),
			new Medidas("España", 'Child cares, Kindergartens- remain to be closed until 5 April 2020/ All schools postponed commencements to 3 April 2020 '),
			new Medidas("Honduras", 'Ministry of Land, Infrastructure and Transport, Ministry of Science and ICT & Future Planning and KCDC co-developed source tracing data hub for COVID-19 in Korea for quick and accurate data analysis- ...'),
			new Medidas("Guatemala", 'Ministry of Education- provide e-learning resources to students for free so students can preview contents before the semester begins '),
			new Medidas("Chile", 'KCDC announced national disinfecting strategy in public spaces to damage minimisation. '),
			new Medidas("Venezuela", 'Avoid activities in confined space, call for non-essential event restriction in churches '),
			new Medidas("Belice", 'All medical staffs must wear individual protection gear or full-bodie gear for examinations '),
			new Medidas("Cuba", 'Limit all church activities and self-isolate first if you exhibit any slight symptom and contact the hospital '),
			new Medidas("Ecuador", 'Limit outdoor activity and interstate visit and follow self-isolation protocols '),
			new Medidas("Perú", 'fast rate of transmission confirmed in the region- isolate first then conduct test '),
			new Medidas("Estados Unidos", 'Asiade Age care facility in Busan- cohort isolation after one social worker resulted positive '),
			new Medidas("Francia", 'patients in Chungdo Dae-nam Hospital received positive- cohort isolation '),
			new Medidas("Italia", 'Government asked to self-isolate whoever attended services by Shin-Cheon-ji (cult church) in Korea and Cheongdo-Daenam Hospital (currently found 49 people) '),
			new Medidas("Rusia", 'Authorise medical professional to test any patient who hasn\'t been to overseas but exhibit symptoms'),
			new Medidas("Japón", 'Extended regional and local triage check-up centre for Covid '),
			new Medidas("China", 'First possible case in South Korea announced, Chinese woman travelling from Wuhan who worked near Seoul'),
			new Medidas("Corea", 'All short-term visitors banned'),
			new Medidas("Serbia", 'Israel suspended all flights from China.'),
		];
	}

	getObservable() {
		return this.set_medidas$.asObservable();
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