import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../src/environments/environment";
import {Pet} from "../model/Pet";
import {FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private calledURL: string;
  constructor(private httpClient: HttpClient) {
    //this.calledURL = `${environment.backEndUrl}pets`;
    this.calledURL = "http://localhost:8080/pets";
  }

  getPets(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.calledURL)
      .pipe(map(response => response.sort((a: Pet, b: Pet) => a.name.localeCompare(b.name))));
  }

  addPet(pet: UntypedFormGroup) {
    //this.httpClient.post(this.calledURL, pet)
    this.httpClient.post<UntypedFormGroup>(this.calledURL, pet)
      .subscribe(response => console.log(response));
    this.getPets();
  }
}
