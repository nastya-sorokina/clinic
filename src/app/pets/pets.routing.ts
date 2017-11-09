import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPetsComponent } from './all-pets/all-pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { NewPetComponent } from './new-pet/new-pet.component';

const routes: Routes = [
  { path: 'all-pets', component: AllPetsComponent },
  { path: 'detail/:id', component: PetDetailComponent },
  { path: 'add-new', component: NewPetComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
