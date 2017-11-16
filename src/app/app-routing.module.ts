import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientModule } from './client/client.module';
import { DoctorModule } from './doctor/doctor.module';
import { PetsModule } from './pets/pets.module';

import { StartPageComponent } from './start-page/start-page.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const routes: Routes = [
  { path: 'doctor/cabinet/:id', loadChildren: './doctor/doctor.module#DoctorModule' },
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'start-page',  component: StartPageComponent },
  { path: 'authorization',  component: AuthorizationComponent },
  { path: 'pet', loadChildren: './pets/pets.module#PetsModule' },
  { path: 'client', loadChildren: './client/client.module#ClientModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

