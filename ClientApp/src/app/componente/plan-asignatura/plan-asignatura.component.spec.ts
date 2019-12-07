import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanAsignaturaComponent } from './plan-asignatura.component';

describe('PlanAsignaturaComponent', () => {
  let component: PlanAsignaturaComponent;
  let fixture: ComponentFixture<PlanAsignaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanAsignaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
