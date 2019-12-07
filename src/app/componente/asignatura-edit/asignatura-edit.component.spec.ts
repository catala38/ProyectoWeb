import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaEditComponent } from './asignatura-edit.component';

describe('AsignaturaEditComponent', () => {
  let component: AsignaturaEditComponent;
  let fixture: ComponentFixture<AsignaturaEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
