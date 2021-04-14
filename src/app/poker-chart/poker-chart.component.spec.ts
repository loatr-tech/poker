import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerChartComponent } from './poker-chart.component';

describe('PokerChartComponent', () => {
  let component: PokerChartComponent;
  let fixture: ComponentFixture<PokerChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
