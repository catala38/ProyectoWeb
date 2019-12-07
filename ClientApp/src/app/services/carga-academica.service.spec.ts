import { TestBed } from '@angular/core/testing';

import { CargaAcademicaService } from './carga-academica.service';

describe('CargaAcademicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargaAcademicaService = TestBed.get(CargaAcademicaService);
    expect(service).toBeTruthy();
  });
});
