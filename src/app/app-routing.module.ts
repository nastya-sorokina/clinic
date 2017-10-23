import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientCabinetComponent } from './client-cabinet.component';
import { StartPageComponent }      from './start-page.component';

const routes: Routes = [
  { path: 'client-cabinet',  component: ClientCabinetComponent },
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'start-page',  component: StartPageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
