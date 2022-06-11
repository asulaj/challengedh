import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateactivityComponent } from './generateactivity.component';

describe('GenerateactivityComponent', () => {
  let component: GenerateactivityComponent;
  let fixture: ComponentFixture<GenerateactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
