import { TestBed } from '@angular/core/testing';

import { RegionsService } from './regions.service';

describe('RegionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegionsService = TestBed.get(RegionsService);
    expect(service).toBeTruthy();
  });
});
