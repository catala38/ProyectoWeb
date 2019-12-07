import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteCargaComponent } from './estudiante-carga.component';

describe('EstudianteCargaComponent', () => {
  let component: EstudianteCargaComponent;
  let fixture: ComponentFixture<EstudianteCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudianteCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudianteCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
