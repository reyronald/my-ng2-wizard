import {NgModule}     from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';

import {ExampleTwoComponent}      from './example-two.component';
import {ExampleTwoStep1Component} from './example-two-step1.component';
import {ExampleTwoStep2Component} from './example-two-step2.component';
import {ExampleTwoStep3Component} from './example-two-step3.component';

import {ExampleTwoWizardService}  from './example-two-wizard.service';

import {exampleTwoRouting, appRoutingProviders} from './example-two.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    exampleTwoRouting,
  ],
  declarations: [
    ExampleTwoComponent,
    ExampleTwoStep1Component,
    ExampleTwoStep2Component,
    ExampleTwoStep3Component,
  ],
  providers: [
  	appRoutingProviders,
    ExampleTwoWizardService
  ]
})
export class ExampleTwoModule {}