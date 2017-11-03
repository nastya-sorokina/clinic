import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientCabinetComponent } from './client-cabinet.component/client-cabinet.component';
import { DoctorCabinetComponent } from './doctor-cabinet.component/doctor-cabinet.component';
import { StartPageComponent } from './start-page.component/start-page.component';
import { AuthorizationComponent } from './authorization.component/authorization.component';
import { MyPetsComponent } from './pets/my-pets.component';
import { AllPetsComponent } from './pets/all-pets.component';
import { PetDetailComponent } from './pet-detail.component/pet-detail.component';
import { ClientDetailComponent } from './client-detail.component/client-detail.component';

const routes: Routes = [
  { path: 'client-cabinet/:id',  component: ClientCabinetComponent },
  { path: 'doctor-cabinet/:id', component: DoctorCabinetComponent},
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
  { path: 'start-page',  component: StartPageComponent },
  { path: 'authorization',  component: AuthorizationComponent },
  { path: 'client-cabinet/:id/my-pets',  component: MyPetsComponent },
  { path: 'all-pets',  component: AllPetsComponent },
  { path: 'pet/detail/:id', component: PetDetailComponent },
  { path: 'client/detail/:id', component: ClientDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
