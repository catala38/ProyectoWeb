import { TestBed } from '@angular/core/testing';

import { ProgramaService } from './programa.service';

describe('ProgramaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramaService = TestBed.get(ProgramaService);
    expect(service).toBeTruthy();
  });
});
