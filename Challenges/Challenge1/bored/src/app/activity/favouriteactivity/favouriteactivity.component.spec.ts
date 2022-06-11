import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteactivityComponent } from './favouriteactivity.component';

describe('FavouriteactivityComponent', () => {
  let component: FavouriteactivityComponent;
  let fixture: ComponentFixture<FavouriteactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
