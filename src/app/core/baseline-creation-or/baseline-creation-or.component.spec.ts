import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaselineCreationOrComponent } from './baseline-creation-or.component';

describe('BaselineCreationOrComponent', () => {
  let component: BaselineCreationOrComponent;
  let fixture: ComponentFixture<BaselineCreationOrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaselineCreationOrComponent]
    });
    fixture = TestBed.createComponent(BaselineCreationOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
