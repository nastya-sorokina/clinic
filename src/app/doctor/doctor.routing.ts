import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorCabinetComponent } from './doctor-cabinet/doctor-cabinet.component';

const routes: Routes = [
  { path: '/cabinet/:id', component: DoctorCabinetComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
