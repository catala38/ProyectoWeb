import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeTematicoEditComponent } from './eje-tematico-edit.component';

describe('EjeTematicoEditComponent', () => {
  let component: EjeTematicoEditComponent;
  let fixture: ComponentFixture<EjeTematicoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjeTematicoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjeTematicoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
