import { Injectable } from '@angular/core';
import { Medidas } from '../models/medidas';


@Injectable()
export class MedidasService {

	public medidas: Medidas[];

	constructor() {
		this.medidas = [

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
			new Medidas("México", 'All medical staffs must wear individual protection gear or full-bodie gear for examinations '),
			new Medidas("Colombia", 'Limit all church activities and self-isolate first if you exhibit any slight symptom and contact the hospital '),
			new Medidas("Argentina", 'Limit outdoor activity and interstate visit and follow self-isolation protocols '),
			new Medidas("Uruguay", 'fast rate of transmission confirmed in the region- isolate first then conduct test '),
			new Medidas("Panamá", 'Asiade Age care facility in Busan- cohort isolation after one social worker resulted positive '),
			new Medidas("Nicaragua", 'patients in Chungdo Dae-nam Hospital received positive- cohort isolation '),
			new Medidas("Brasil", 'Government asked to self-isolate whoever attended services by Shin-Cheon-ji (cult church) in Korea and Cheongdo-Daenam Hospital (currently found 49 people) '),
			new Medidas("España", 'Authorise medical professional to test any patient who hasn\'t been to overseas but exhibit symptoms'),
			new Medidas("Honduras", 'Extended regional and local triage check-up centre for Covid '),
			new Medidas("Guatemala", 'First possible case in South Korea announced, Chinese woman travelling from Wuhan who worked near Seoul'),
			new Medidas("Chile", 'All short-term visitors banned'),
			new Medidas("Venezuela", 'Israel suspended all flights from China.'),
		];
	}

	getMedidas() {
		console.log(this.medidas);
		return this.medidas;
	}
}