import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanDesarrolloListComponent } from './plan-desarrollo-list.component';

describe('PlanDesarrolloListComponent', () => {
  let component: PlanDesarrolloListComponent;
  let fixture: ComponentFixture<PlanDesarrolloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanDesarrolloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanDesarrolloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
