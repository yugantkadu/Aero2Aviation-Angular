import { TestBed } from '@angular/core/testing';

import { VehicleBrandDetailsService } from './vehicle-brand-details.service';

describe('VehicleBrandDetailsService', () => {
  let service: VehicleBrandDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleBrandDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
