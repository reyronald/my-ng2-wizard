import {Component}               from '@angular/core';
import {Router}                  from '@angular/router';
import {ExampleTwoWizardService} from './example-two-wizard.service';

@Component({
	template: `
  <div class="row">
	  <button class="btn btn-primary pull-left" (click)="onPrevious()">Previous</button>
  </div>

  <br>
  
  <div>
	  <strong>Example Two Step 3</strong>
  </div>    
	`
})
export class ExampleTwoStep3Component {
  constructor(
    private _router: Router,
    private _exampleTwoWizardService: ExampleTwoWizardService
    ) {
    if (this._exampleTwoWizardService.data.isNotValid()) {
      this.onPrevious();
    }
  } 

  onPrevious() {
    this._router.navigate(['/two/step2']);   
  }
}