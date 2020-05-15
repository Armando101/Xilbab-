export class CamasGql {
	constructor(
		public _id: string,
	    public code: string,
	    public lat: number,
	    public lng: number,
	    public bedsTotal: number,
	    public bedsAverage: number,
	    public populationAverage: number,
	    public estimatedBedsTotal: number,
	    public estimatedBedsAverage: number
	) {
	}
}