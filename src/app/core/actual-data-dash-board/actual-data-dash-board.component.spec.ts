import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualDataDashBoardComponent } from './actual-data-dash-board.component';

describe('ActualDataDashBoardComponent', () => {
  let component: ActualDataDashBoardComponent;
  let fixture: ComponentFixture<ActualDataDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualDataDashBoardComponent]
    });
    fixture = TestBed.createComponent(ActualDataDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
