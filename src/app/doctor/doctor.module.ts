import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { routing } from './doctor.routing';

import { ConsultationService } from '../services/consultation.service';
import { DoctorCabinetComponent } from './doctor-cabinet/doctor-cabinet.component';
import { EditConsultationComponent } from './edit-consultation/edit-consultation.component';
import { NewConsultationComponent } from './new-consultation/new-consultation.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [DoctorCabinetComponent, EditConsultationComponent, NewConsultationComponent],
  providers: [ConsultationService]
})
export class DoctorModule { }
