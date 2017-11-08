import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './doctor.routing';

import { ConsultationService } from '../services/consultation.service';
import { DoctorCabinetComponent } from './doctor-cabinet/doctor-cabinet.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DoctorCabinetComponent],
  providers: [ConsultationService]
})
export class DoctorModule { }
