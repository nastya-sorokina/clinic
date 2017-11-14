import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import { Pet } from '../model/pet';

import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class PetService {

    dbUrl = 'http://localhost:3000/pet';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    getPets(): Observable<Array<Pet>> {
        return this.http.get(this.dbUrl).map(res => res.json());
    }

    getPetsByClientId(ownerId): Observable<Array<Pet>> {
      const url = `${this.dbUrl}?ownerId=${ownerId}`;
      return this.http.get(url).map(res => res.json());
    }

    getPetById(id: number): Observable<Pet> {
        const url = `${this.dbUrl}/${id}`;
        return this.http.get(url).map(res => res.json() as Pet);
    }

    addPet(pet: Pet): void {
      const body = {name: pet.name, kind: pet.kind, age: pet.age, ownerId: pet.ownerId};
      this.http.post(`${this.dbUrl}`, body, {headers: this.headers}).subscribe();
    }

    searchPet(term: string): Observable<Pet[]> {
      return this.http
        .get(`${this.dbUrl}?name_like=${term}`)
        .map(response => response.json() as Pet[]);
    }

    getPetByPetNameAndOwnerId(name: string, ownerId: number): Observable<Pet> {
      const url = `${this.dbUrl}?name=${name}&?ownerId=${ownerId}`;
      return this.http.get(url).map(res => res.json() as Pet);
    }
}
