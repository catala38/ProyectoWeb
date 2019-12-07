import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjeTematicoListComponent } from './eje-tematico-list.component';

describe('EjeTematicoListComponent', () => {
  let component: EjeTematicoListComponent;
  let fixture: ComponentFixture<EjeTematicoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjeTematicoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjeTematicoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
