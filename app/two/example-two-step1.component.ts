import {Component}               from '@angular/core';
import {Router}                  from '@angular/router';
import {ExampleTwoWizardService} from './example-two-wizard.service';

@Component({
	template: `
  <div class="row">
	  <button class="btn btn-primary pull-right" (click)="onNext()">Next</button>
  </div>
  	
  <br>

  <div>
	  <strong>Example Two Step 1</strong>
  </div>
	`
})
export class ExampleTwoStep1Component {
  constructor(
    private _router: Router,
    private _exampleTwoWizardService: ExampleTwoWizardService
    ) {
  } 

  onNext() {
    this._router.navigate(['/two/step2']);   
  }
}