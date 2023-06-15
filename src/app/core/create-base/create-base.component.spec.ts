import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBaseComponent } from './create-base.component';

describe('CreateBaseComponent', () => {
  let component: CreateBaseComponent;
  let fixture: ComponentFixture<CreateBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBaseComponent]
    });
    fixture = TestBed.createComponent(CreateBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
