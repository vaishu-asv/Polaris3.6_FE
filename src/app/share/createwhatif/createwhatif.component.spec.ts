import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatewhatifComponent } from './createwhatif.component';

describe('CreatewhatifComponent', () => {
  let component: CreatewhatifComponent;
  let fixture: ComponentFixture<CreatewhatifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatewhatifComponent]
    });
    fixture = TestBed.createComponent(CreatewhatifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
