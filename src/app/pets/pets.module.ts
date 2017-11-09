import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { routing } from './pets.routing';

import { AllPetsComponent } from './all-pets/all-pets.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';

import { PetService } from '../services/pet.service';
import { ConsultationService } from '../services/consultation.service';
import { SearchComponent } from '../search/search.component';
import { NewPetComponent } from './new-pet/new-pet.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [ AllPetsComponent,
                  PetDetailComponent,
                  SearchComponent,
                  NewPetComponent],
  providers: [PetService, ConsultationService]
})
export class PetsModule { }
