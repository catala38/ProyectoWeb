import { TestBed } from '@angular/core/testing';

import { PlanDesarrolloService } from './plan-desarrollo.service';

describe('PlanDesarrolloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanDesarrolloService = TestBed.get(PlanDesarrolloService);
    expect(service).toBeTruthy();
  });
});
