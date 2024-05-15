import {Component, inject, numberAttribute} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder, UntypedFormGroup
} from "@angular/forms";
import {PetService} from "../../../service/pet.service";

@Component({
  selector: 'app-create-pet-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './create-pet-form.component.html',
  styleUrl: './create-pet-form.component.css'
})
export class CreatePetFormComponent {

  formBuilder: FormBuilder = inject(FormBuilder);
  petService: PetService = inject(PetService);

  constructor() {

  }

  createPetForm:UntypedFormGroup = this.formBuilder.group({
    name: '',
    kind: '',
    image: '',
    profileText: '',
    popularity: ''
  })


  onSubmit() {
    console.log(this.createPetForm.value);
    this.petService.addPet(this.createPetForm.value);
    this.createPetForm.reset();
  }
}
