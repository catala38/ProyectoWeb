import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDesarrolloAddComponent } from './plan-desarrollo-add.component';

describe('PlanDesarrolloAddComponent', () => {
  let component: PlanDesarrolloAddComponent;
  let fixture: ComponentFixture<PlanDesarrolloAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDesarrolloAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDesarrolloAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
