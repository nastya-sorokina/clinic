import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Pet } from '../model/pet';
import { PetService } from '../services/pet.service';

import { Consultation } from '../model/consultation';
import { ConsultationService } from '../services/consultation.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: [ './pet-detail.component.css' ]
})
export class PetDetailComponent implements OnInit {

  pet: Pet;
  consultations: Consultation [];

  constructor(
  private petService: PetService,
  private consultationService: ConsultationService,
  private route: ActivatedRoute,
  private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
    .switchMap((params: ParamMap) => this.petService.getPet(+params.get('id')))
    .subscribe(pet => this.pet = pet);

    this.route.paramMap
      .switchMap((params: ParamMap) => this.consultationService.getConsultationsByPetId(+params.get('id')))
      .subscribe(consultations => this.consultations = consultations);
  }

  goBack(): void {
    this.location.back();
  }
}
