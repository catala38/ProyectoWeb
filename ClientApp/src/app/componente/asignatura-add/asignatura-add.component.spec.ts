import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaAddComponent } from './asignatura-add.component';

describe('AsignaturaAddComponent', () => {
  let component: AsignaturaAddComponent;
  let fixture: ComponentFixture<AsignaturaAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignaturaAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignaturaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
