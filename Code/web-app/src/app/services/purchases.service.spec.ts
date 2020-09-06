import { TestBed } from '@angular/core/testing';

import { PurchasesService } from './purchases.service';

describe('PurchasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchasesService = TestBed.get(PurchasesService);
    expect(service).toBeTruthy();
  });
});
