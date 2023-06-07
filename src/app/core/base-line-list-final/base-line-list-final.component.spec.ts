import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLineListFinalComponent } from './base-line-list-final.component';

describe('BaseLineListFinalComponent', () => {
  let component: BaseLineListFinalComponent;
  let fixture: ComponentFixture<BaseLineListFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseLineListFinalComponent]
    });
    fixture = TestBed.createComponent(BaseLineListFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
