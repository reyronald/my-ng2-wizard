import { Component } from '@angular/core';

@Component({
    template: `
<ul>
	<li>
		<a [routerLink]="['/one']">One</a>		
	</li>
	<li>
		<a [routerLink]="['/two']">Two</a>		
	</li>
	<li>
		<a [routerLink]="['/three']">Three</a>
	</li>
</ul>
    `
})
export class HomeComponent { }