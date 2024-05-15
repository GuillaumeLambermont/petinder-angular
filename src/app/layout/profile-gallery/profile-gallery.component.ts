import {Component, inject, OnInit} from '@angular/core';
import {PetService} from "../../../../service/pet.service";
import {Pet} from "../../../../model/Pet";
import {CommonModule, NgFor, NgIf, NgClass} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NameFilterPipe} from "../../../../pipes/name-filter.pipe";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, NameFilterPipe],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = [];
  selectedPet: Pet | any;
  searchText: string;

  constructor(private _petService: PetService) {
    this.selectedPet = undefined;
    this.searchText = "";
}

  ngOnInit(){
    this.getPets();
  }

  getPets() {
    this._petService.getPets().subscribe(pets => this.pets = pets);
  }

  selectPet(pet: Pet, event: Event) {
    this.selectedPet = pet;
    event.stopPropagation();
  }

  protected readonly event = event;

}
