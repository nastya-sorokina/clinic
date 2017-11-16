import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ConsultationService} from '../../services/consultation.service';
import {Consultation} from '../../model/consultation';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {PetService} from '../../services/pet.service';
import {Pet} from '../../model/pet';

@Component({
  selector: 'app-new-consultation',
  templateUrl: './new-consultation.component.html',
  styleUrls: ['./new-consultation.component.css']
})
export class NewConsultationComponent implements OnInit {

  consultation: Consultation = new Consultation();
  owners: User [];
  pets: Pet [];
  date: string;

  constructor(  private consultationService: ConsultationService,
                private userService: UserService,
                private petService: PetService,
                private location: Location) { }

  getOwners(): void {
    this.userService.getUsers().subscribe(owners => {
      this.owners = owners;
    });
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => {
      this.pets = pets;
    });
  }

  getPetProperties(): void {
    console.log(this.consultation.petId);
    this.petService.getPetById(this.consultation.petId).subscribe(pet => {
      this.consultation.petKind = pet.kind;
      this.consultation.clientId = pet.ownerId;
    });
  }

  ngOnInit() {
    this.getOwners();
    this.getPets();
  }

  add(): void {
    this.consultationService.add(this.consultation, this.date);
    alert('Запись добавлена!');
  }

  goBack(): void {
    this.location.back();
  }

  formatDate(date: Date) {

    let dd = date.getDate();
    let ddst, mmst;

    if (dd < 10) {
      ddst = '0' + dd;
    }

    let mm = date.getMonth() + 1;
    if (mm < 10) {
      mmst = '0' + mm;
    }

    let yy = date.getFullYear();

    return yy + '-' + mmst + '-' + ddst;
  }

}
