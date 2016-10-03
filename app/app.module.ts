import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}   from './app.component';
import {HomeComponent}  from './home.component';
import {OneComponent}   from './one.component';
import {TwoComponent}   from './two.component';
import {ThreeComponent} from './three.component';

import {ExampleOneComponent} from './one/example-one.component';
import {ExampleOneStep1Component} from './one/example-one-step1.component';
import {ExampleOneStep2Component} from './one/example-one-step2.component';
import {ExampleOneStep3Component} from './one/example-one-step3.component';

import {routing, appRoutingProviders} from './app.routes';

@NgModule({
	imports: [ 
		BrowserModule,
		routing
	],
	declarations: [ 
		AppComponent,
		HomeComponent,
		OneComponent,
		TwoComponent,
		ThreeComponent,

		ExampleOneComponent,
		ExampleOneStep1Component,
		ExampleOneStep2Component,
		ExampleOneStep3Component,
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [ 
		AppComponent 
	]
})
export class AppModule { }