import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router} from '@angular/router';

import { PetService } from '../../services/pet.service';
import { Pet } from '../../model/pet';

@Component({
  selector: 'all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {

  title = 'Животные';
  pets: Pet[];
  selectedPet: Pet;

  constructor(private router: Router,
              private petService: PetService,
              private location: Location) { }

  getPets(): void {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  ngOnInit(): void {
    this.getPets();
  }

  gotoDetailPet(pet: Pet): void {
    this.selectedPet = pet;
    this.router.navigate(['pet/detail', this.selectedPet.id]);
  }

  goBack(): void {
    this.location.back();
  }
}
