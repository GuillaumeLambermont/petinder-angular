import {Component, inject, OnInit} from '@angular/core';
import {PetService} from "../../../../service/pet.service";
import {Pet} from "../../../../model/Pet";
import {CommonModule, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css'
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = [];


  constructor(private _petService: PetService) {
}

  ngOnInit(){
    this.getPets();
  }

  getPets() {
    this._petService.getPets().subscribe(pets => this.pets = pets);
  }
}
