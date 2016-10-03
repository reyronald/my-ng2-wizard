import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
	<h1><a [routerLink]="['/']">Home</a></h1>

    <router-outlet></router-outlet>

    <footer class="footer">
    	<p class="text-muted text-center">Ronald Rey</p>
	</footer>
    `
})
export class AppComponent { }