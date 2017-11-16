import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../model/pet';


@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  owners: User [];
  kind: string;
  name: string;
  age: number;
  selectedOwnerId: number;

  constructor(private location: Location,
              private userService: UserService,
              private petService: PetService) { }

  getOwners(): void {
    this.userService.getUsers().subscribe(owners => {
      this.owners = owners;
      this.selectedOwnerId = this.owners[0].id;
    });
  }

  add(): void {
    let pet: Pet = new Pet();
    pet.name = this.name;
    pet.kind = this.kind;
    pet.age = this.age;
    pet.ownerId = this.selectedOwnerId;
    this.petService.addPet(pet);
    alert('Пациеент добавлен!');
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.getOwners();
  }

}
