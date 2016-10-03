import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent}        from './home.component';
import {OneComponent}         from './one/one.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'one', component: OneComponent },
];

export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
