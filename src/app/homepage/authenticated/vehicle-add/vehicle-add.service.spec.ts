import { TestBed } from '@angular/core/testing';

import { VehicleAddService } from './vehicle-add.service';

describe('VehicleAddService', () => {
  let service: VehicleAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
