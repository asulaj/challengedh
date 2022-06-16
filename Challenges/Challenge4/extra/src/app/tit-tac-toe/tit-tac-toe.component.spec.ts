import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitTacToeComponent } from './tit-tac-toe.component';

describe('TitTacToeComponent', () => {
  let component: TitTacToeComponent;
  let fixture: ComponentFixture<TitTacToeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitTacToeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitTacToeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
