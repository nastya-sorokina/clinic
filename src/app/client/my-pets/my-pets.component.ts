import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

import { PetService } from '../../services/pet.service';
import { Pet } from '../../model/pet';

@Component({
  selector: 'my-pets',
  templateUrl: './my-pets.component.html',
  styleUrls: ['./my-pets.component.css']
})
export class MyPetsComponent implements OnInit {

  title = 'Мои питомцы';
  pets: Pet[];
  selectedPet: Pet;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private petService: PetService,
              private location: Location) { }

  getPets(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.petService.getPetsByClientId(+params.get('id')))
      .subscribe(pets => this.pets = pets);
  }

  ngOnInit(): void {
    this.getPets();
  }

  gotoDetailPet(pet: Pet): void {
    this.selectedPet = pet;
    this.router.navigate(['/pet/detail', this.selectedPet.id]);
  }

  goBack(): void {
    this.location.back();
  }
}
