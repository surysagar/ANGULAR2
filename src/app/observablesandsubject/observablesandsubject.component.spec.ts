import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesandsubjectComponent } from './observablesandsubject.component';

describe('ObservablesandsubjectComponent', () => {
  let component: ObservablesandsubjectComponent;
  let fixture: ComponentFixture<ObservablesandsubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablesandsubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablesandsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
