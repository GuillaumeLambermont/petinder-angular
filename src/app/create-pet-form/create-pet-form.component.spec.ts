import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePetFormComponent } from './create-pet-form.component';

describe('CreatePetFormComponent', () => {
  let component: CreatePetFormComponent;
  let fixture: ComponentFixture<CreatePetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePetFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
