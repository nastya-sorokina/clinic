import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPetsComponent } from './all-pets/all-pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

const routes: Routes = [
  { path: 'all-pets', component: AllPetsComponent },
  { path: 'detail/:id', component: PetDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
