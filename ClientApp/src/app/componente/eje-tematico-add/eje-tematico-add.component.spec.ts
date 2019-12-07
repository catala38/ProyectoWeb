import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeTematicoAddComponent } from './eje-tematico-add.component';

describe('EjeTematicoAddComponent', () => {
  let component: EjeTematicoAddComponent;
  let fixture: ComponentFixture<EjeTematicoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjeTematicoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjeTematicoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
