import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pets.routing';

import { AllPetsComponent } from './all-pets/all-pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

import { PetService } from '../services/pet.service';
import { ConsultationService } from '../services/consultation.service';
import { SearchComponent } from '../search/search.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ AllPetsComponent,
                  PetDetailComponent,
                  SearchComponent],
  providers: [PetService, ConsultationService]
})
export class PetsModule { }
