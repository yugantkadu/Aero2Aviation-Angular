import { TestBed } from '@angular/core/testing';

import { VehicleCategoryDetailsService } from './vehicle-category-details.service';

describe('VehicleCategoryDetailsService', () => {
  let service: VehicleCategoryDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleCategoryDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
