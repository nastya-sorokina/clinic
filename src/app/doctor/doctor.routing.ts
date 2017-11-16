import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorCabinetComponent } from './doctor-cabinet/doctor-cabinet.component';
import {EditConsultationComponent} from './edit-consultation/edit-consultation.component';
import {NewConsultationComponent} from './new-consultation/new-consultation.component';

const routes: Routes = [
  { path: '', component: DoctorCabinetComponent },
  { path: 'consultation/edit/:consultationId', component: EditConsultationComponent},
  { path: 'consultation/new', component: NewConsultationComponent},
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
