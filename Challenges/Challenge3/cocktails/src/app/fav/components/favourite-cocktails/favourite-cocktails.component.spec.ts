import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteCocktailsComponent } from './favourite-cocktails.component';

describe('FavouriteCocktailsComponent', () => {
  let component: FavouriteCocktailsComponent;
  let fixture: ComponentFixture<FavouriteCocktailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteCocktailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteCocktailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
