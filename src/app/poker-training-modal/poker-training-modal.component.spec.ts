import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerTrainingModalComponent } from './poker-training-modal.component';

describe('PokerTrainingModalComponent', () => {
  let component: PokerTrainingModalComponent;
  let fixture: ComponentFixture<PokerTrainingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerTrainingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerTrainingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
