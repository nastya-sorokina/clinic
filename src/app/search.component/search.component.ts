import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {PetService} from '../services/pet.service';
import {UserService} from '../services/user.service';
import {Pet} from '../model/pet';
import {User} from '../model/user';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [UserService, PetService]
})
export class SearchComponent implements OnInit {
  pets: Observable<Pet[]>;
  clients: Observable<User[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private petService: PetService,
    private userService: UserService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.pets = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.petService.searchPet(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Pet[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Pet[]>([]);
      });

    this.clients = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.userService.searchClient(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<User[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }

  gotoDetailPet(pet: Pet): void {
    let link = ['pet/detail', pet.id];
    this.router.navigate(link);
  }

  gotoDetailClient(client: User): void {
    let link = ['client/detail', client.id];
    this.router.navigate(link);
  }
}

