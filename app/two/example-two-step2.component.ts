import {Component}               from '@angular/core';
import {Router}                  from '@angular/router';
import {ExampleTwoWizardService} from './example-two-wizard.service';

@Component({
	template: `
  <div class="row">
    <button class="btn btn-primary pull-left" (click)="onPrevious()">Previous</button>
	  <button class="btn btn-primary pull-right" (click)="onNext()">Next</button>
  </div>
  
  <br>
  
  <div>
    <strong>Example Two Step 2</strong>
  </div>
	`
})
export class ExampleTwoStep2Component {
  constructor(
    private _router: Router,
    private _exampleTwoWizardService: ExampleTwoWizardService
    ) {
    if (this._exampleTwoWizardService.data.isNotValid()) {
      this.onPrevious();
    }
  } 

  onPrevious() {
    this._router.navigate(['/two/step1']);   
  }

  onNext() {
    this._router.navigate(['/two/step3']);   
  }
}