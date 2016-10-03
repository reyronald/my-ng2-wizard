import {Injectable} from '@angular/core';

@Injectable()
export class ExampleTwoWizardService {
	public data: any = {};

	constructor() {
		this.data.isNotValid = () => {
			console.info('Example Two) Validating before moving from one step to the other.');
		};
	}
}