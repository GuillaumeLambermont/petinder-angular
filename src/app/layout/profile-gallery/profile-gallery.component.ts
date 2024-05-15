import {Component, inject, OnInit} from '@angular/core';
import {PetService} from "../../../../service/pet.service";
import {Pet} from "../../../../model/Pet";
import {CommonModule, NgFor, NgIf, NgClass} from "@angular/common";
import {FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormBuilder} from "@angular/forms";
import {NameFilterPipe} from "../../../../pipes/name-filter.pipe";
import {Observable} from "rxjs";
import {CreatePetFormComponent} from "../../create-pet-form/create-pet-form.component";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, NameFilterPipe, ReactiveFormsModule, CreatePetFormComponent],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = [];
  selectedPet: Pet | any;
  searchText: string;
  showForm: boolean;


  constructor(private _petService: PetService) {
    this.selectedPet = undefined;
    this.searchText = "";
    this.showForm = false;
}

  ngOnInit(){
    this.getPets();
  }

  getPets() {
    this._petService.getPets().subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
  }
  unselectPet(){
    this.selectedPet = undefined;
  }
  activateShowForm(active: boolean){
    this.showForm = !active;
  }


  protected readonly name = name;

  onSubmit() {

  }
}
