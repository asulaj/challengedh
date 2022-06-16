import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalIngredientsComponent } from './modal-ingredients.component';

describe('ModalIngredientsComponent', () => {
  let component: ModalIngredientsComponent;
  let fixture: ComponentFixture<ModalIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
