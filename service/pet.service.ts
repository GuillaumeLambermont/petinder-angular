import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private calledURL: string;
  constructor(private httpClient: HttpClient) {
    //this.calledURL = `${environment.backEndUrl}pets`;
    this.calledURL = "http://localhost:8080/pets";
  }

  getPets(): Observable<any> {
    return this.httpClient.get(this.calledURL);
  }
}
