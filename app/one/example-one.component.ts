import {Component, OnInit} from '@angular/core';
import {EnumUtils} from './enum-utils';
import {Wizard} from './wizard';

enum ExampleOneWizardStep {
	StepOne,
	StepTwo,
	StepThree
}

@Component({
	selector: 'my-example-one',
	templateUrl: '/app/one/example-one.html',
})
export class ExampleOneComponent extends Wizard<ExampleOneWizardStep> {
	public ExampleOneWizardStep = ExampleOneWizardStep;

	constructor() {
		super(new EnumUtils(ExampleOneWizardStep));
	}
}