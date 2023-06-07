import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWhatIfAnalysisComponent } from './create-what-if-analysis.component';

describe('CreateWhatIfAnalysisComponent', () => {
  let component: CreateWhatIfAnalysisComponent;
  let fixture: ComponentFixture<CreateWhatIfAnalysisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateWhatIfAnalysisComponent]
    });
    fixture = TestBed.createComponent(CreateWhatIfAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
