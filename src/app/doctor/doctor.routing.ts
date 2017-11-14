import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorCabinetComponent } from './doctor-cabinet/doctor-cabinet.component';
import {EditConsultationComponent} from './edit-consultation/edit-consultation.component';

const routes: Routes = [
  { path: 'cabinet/:id', component: DoctorCabinetComponent },
  { path: 'consultation/edit/:id', component: EditConsultationComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
