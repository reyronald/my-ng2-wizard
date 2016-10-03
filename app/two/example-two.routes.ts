import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExampleTwoComponent}      from './example-two.component';
import {ExampleTwoStep1Component} from './example-two-step1.component';
import {ExampleTwoStep2Component} from './example-two-step2.component';
import {ExampleTwoStep3Component} from './example-two-step3.component';

const exampleTwoRoutes: Routes = [
  {
    path: 'two',
    component: ExampleTwoComponent,
    children: [
      { path: '', redirectTo: 'step1', pathMatch: 'full' },
      { path: 'step1', component: ExampleTwoStep1Component },
      { path: 'step2', component: ExampleTwoStep2Component },
      { path: 'step3', component: ExampleTwoStep3Component },
    ],
  },
];

export const appRoutingProviders: any[] = [
];

export const exampleTwoRouting: ModuleWithProviders = RouterModule.forChild(exampleTwoRoutes);